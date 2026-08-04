import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

import { iconNames } from '../dist/identifiers.esm.js';
import {
  getIconLoader,
  isNativeIconId,
  loadIconById,
} from '../dist/loader.esm.js';

test('every public identifier has an individual module and loader', async () => {
  for (const iconName of iconNames) {
    assert.equal(isNativeIconId(iconName), true, iconName);
    assert.equal(typeof getIconLoader(iconName), 'function', iconName);

    const [source] = await Promise.all(
      ['js', 'cjs', 'd.ts'].map((extension) =>
        readFile(
          new URL(`../dist/icons/${iconName}.${extension}`, import.meta.url),
          'utf8'
        )
      )
    );
    assert.match(source, new RegExp(`${iconName} as default`));
  }
});

test('unknown identifiers fail safely', async () => {
  assert.equal(isNativeIconId('UnknownIcon'), false);
  assert.equal(getIconLoader('UnknownIcon'), null);
  assert.equal(await loadIconById('UnknownIcon'), null);
});

test('the identifiers entry stays React-free at runtime', async () => {
  const identifiersSource = await readFile(
    new URL('../dist/identifiers.esm.js', import.meta.url),
    'utf8'
  );
  assert.doesNotMatch(identifiersSource, /react/);
});

test('loading a known identifier returns its component', async (context) => {
  try {
    const icon = await loadIconById('HeadsetIcon');
    assert.equal(typeof icon, 'function');

    const directModule = await import('../dist/icons/HeadsetIcon.js');
    assert.equal(icon, directModule.default);
  } catch (error) {
    if (
      error?.code === 'ERR_MODULE_NOT_FOUND' &&
      error.message.includes("'react'")
    ) {
      context.skip('React peer dependency is not installed in this checkout');
      return;
    }
    throw error;
  }
});

test('the loader entry contains the registry but no icon implementations', async () => {
  const loaderSource = await readFile(
    new URL('../dist/loader.esm.js', import.meta.url),
    'utf8'
  );
  assert.match(loaderSource, /import\('\.\/icons\/HeadsetIcon\.js'\)/);
  assert.doesNotMatch(loaderSource, /function HeadsetIcon/);
  assert.doesNotMatch(loaderSource, /<svg/);
  assert.doesNotMatch(loaderSource, /index\.(?:esm|cjs)/);
});

test('the legacy root barrel remains functional', async (context) => {
  try {
    const root = await import('../dist/index.esm.js');
    assert.equal(typeof root.HeadsetIcon, 'function');
    assert.equal(root.default.HeadsetIcon, root.HeadsetIcon);
    assert.equal(root.Outline.HeadsetIcon, root.HeadsetIcon);
  } catch (error) {
    if (
      error?.code === 'ERR_MODULE_NOT_FOUND' &&
      error.message.includes("'react'")
    ) {
      context.skip('React peer dependency is not installed in this checkout');
      return;
    }
    throw error;
  }
});

test('the ESM root re-exports individual icon modules', async () => {
  const rootSource = await readFile(
    new URL('../dist/index.esm.js', import.meta.url),
    'utf8'
  );

  assert.match(
    rootSource,
    /export \{ default as HeadsetIcon \} from '\.\/icons\/HeadsetIcon\.js';/
  );
  assert.match(rootSource, /from '\.\/index\.legacy\.esm\.js';/);
  assert.doesNotMatch(rootSource, /function HeadsetIcon/);
  assert.doesNotMatch(rootSource, /react\/jsx-runtime/);
});

test('root declarations expose only the root API', async () => {
  const rootDeclarations = await readFile(
    new URL('../dist/index.d.ts', import.meta.url),
    'utf8'
  );

  assert.match(
    rootDeclarations,
    /export \{ default as HeadsetIcon \} from '\.\/icons\/HeadsetIcon\.js';/
  );
  assert.doesNotMatch(rootDeclarations, /iconNames|getIconLoader|NativeIconId/);
  assert.equal((rootDeclarations.match(/export default/g) ?? []).length, 1);
});
