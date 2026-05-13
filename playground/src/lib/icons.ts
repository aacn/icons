import type { ComponentType, SVGProps } from 'react';
import * as IconsLatest from '@native-systems/icons';
import IconsV121 from 'icons-v121';
import * as IconsV200 from 'icons-v200';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type IconEntry = {
  name: string;
  searchName: string;
  label: string;
  Component: IconComponent;
};

export type CategoryId = 'outline' | 'filled' | 'chars';

export type Category = {
  id: CategoryId;
  title: string;
  subtitle: string;
  icons: Array<IconEntry>;
};

export type VersionOption = 'latest' | '2.0.0' | '1.2.1';

type IconModule = {
  Outline?: Record<string, unknown>;
  Filled?: Record<string, unknown>;
  Chars?: Record<string, unknown>;
  default?: unknown;
};

function toKebabLabel(iconName: string): string {
  const withoutSuffix = iconName.endsWith('Icon')
    ? iconName.slice(0, -4)
    : iconName;

  return withoutSuffix
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
}

function toIconEntries(iconModule: Record<string, unknown>): Array<IconEntry> {
  return Object.entries(iconModule)
    .filter(([name, maybeIcon]) => {
      return name.endsWith('Icon') && typeof maybeIcon === 'function';
    })
    .map(([name, Component]) => {
      return {
        name,
        searchName: name.toLowerCase(),
        label: toKebabLabel(name),
        Component: Component as IconComponent,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function emptyCategory(
  id: CategoryId,
  title: string,
  subtitle: string
): Category {
  return { id, title, subtitle, icons: [] };
}

function buildLatestCategories(iconModule: IconModule): Array<Category> {
  return [
    {
      id: 'outline',
      title: 'Outline',
      subtitle: '18x18, outline set',
      icons: toIconEntries(iconModule.Outline ?? {}),
    },
    {
      id: 'filled',
      title: 'Filled',
      subtitle: '18x18, solid accents',
      icons: toIconEntries(iconModule.Filled ?? {}),
    },
    {
      id: 'chars',
      title: 'Chars',
      subtitle: 'letters, numbers, symbols',
      icons: toIconEntries(iconModule.Chars ?? {}),
    },
  ];
}

function resolveModernIconModule(maybeModule: unknown): IconModule {
  const module = maybeModule as IconModule;
  if (module.Outline || module.Filled || module.Chars) {
    return module;
  }

  const defaultModule = module.default as IconModule | undefined;
  if (
    defaultModule &&
    (defaultModule.Outline || defaultModule.Filled || defaultModule.Chars)
  ) {
    return defaultModule;
  }

  return module;
}

function buildLegacyCategories(
  iconModule: Record<string, unknown>
): Array<Category> {
  return [
    {
      id: 'outline',
      title: 'Outline',
      subtitle: 'legacy package set',
      icons: toIconEntries(iconModule),
    },
    emptyCategory('filled', 'Filled', 'not available in v1.2.1'),
    emptyCategory('chars', 'Chars', 'not available in v1.2.1'),
  ];
}

export function buildCategories(version: VersionOption): Array<Category> {
  if (version === 'latest') {
    return buildLatestCategories(resolveModernIconModule(IconsLatest));
  }

  if (version === '2.0.0') {
    return buildLatestCategories(resolveModernIconModule(IconsV200));
  }

  const legacyIcons = ((IconsV121 as IconModule).default ??
    IconsV121) as Record<string, unknown>;
  return buildLegacyCategories(legacyIcons);
}
