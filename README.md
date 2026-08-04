# Native systems icons package
This package contains components and types, which are used across native systems software projects.

## Version 4.1

Version 4.1 adds independently importable icon modules and a CMS-friendly
asynchronous loader while preserving the existing root exports. Existing named
and CommonJS imports continue to work without migration. Applications that
resolve icon names dynamically should use `@native-systems/icons/loader` to keep
SVG implementations out of the initial bundle.

## React-free icon identifiers

The root package exports React components and requires React at runtime. Non-React
consumers can import every public icon name without loading the component bundle:

```ts
import { iconNames } from '@native-systems/icons/identifiers';

for (const iconName of iconNames) {
  // e.g. validate or enumerate icon identifiers in a backend service
}
```

## Individually loadable icons

The legacy root entry point continues to export every icon. For CMS-driven
identifiers, use the loader entry point so the initial bundle contains only the
registry and each icon is downloaded in its own asynchronous chunk:

```ts
import {
  getIconLoader,
  isNativeIconId,
  loadIconById,
} from '@native-systems/icons/loader';

const loader = getIconLoader(cmsIconId);
const Icon = loader ? await loader().then((module) => module.default) : null;
```

`loadIconById` returns `null` for unknown or removed CMS values:

```ts
const Icon = await loadIconById(cmsIconId);

if (!Icon) {
  return <FallbackIcon aria-label="Unknown icon" />;
}

return <Icon aria-hidden="true" />;
```

Use `isNativeIconId` when a type guard is useful, or React's lazy API when the
component should load during rendering:

```tsx
const loader = isNativeIconId(cmsIconId) ? getIconLoader(cmsIconId) : null;
const LazyIcon = loader ? React.lazy(loader) : null;
```

Every icon is emitted as an individual file, while the ESM root re-exports those
files so applications can keep concise named imports. Direct imports remain
available when an explicit per-icon module path is preferred:

```ts
import HeadsetIcon from '@native-systems/icons/icons/HeadsetIcon';
```

Next.js applications can optimize named imports from the root entry point:

```js
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ['@native-systems/icons'],
  },
};
```

The loader entry point (`@native-systems/icons/loader`) remains separate from
the root barrel and should be used for asynchronous CMS-driven icon selection.

## Steps to deploy new version
1. Update package version.
2. Build project via `yarn build`
3. Publish build via `npm publish`
4. Push changes to repository


## Tailwind components
Components must be exposed to tailwind for preflight and purging/compilation to work:
- v4: `@source "../node_modules/@native-systems/icons/**";`
- v3: `contents: [".node_modules/@native-systems/icons/**"];`

## Playground
A React + Vite playground app is available in `playground/` to browse all exported icons with search and names (heroicons-style overview).

Useful commands from repository root:
- `yarn playground:install`
- `yarn build`
- `yarn playground:dev`
- `yarn playground:build`
