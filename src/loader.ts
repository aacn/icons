import type { JSX, SVGProps } from 'react';

export type NativeIconComponent = (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

export type NativeIconModule = {
  default: NativeIconComponent;
};

export type NativeIconLoader = () => Promise<NativeIconModule>;

// The build replaces this with a literal dynamic-import registry generated from
// the category indexes. Keeping the source placeholder empty makes this module
// type-checkable without requiring generated files in the repository.
export type NativeIconId = string;

const iconLoaders: Record<NativeIconId, NativeIconLoader> = {};

export function isNativeIconId(value: string): value is NativeIconId {
  return Object.prototype.hasOwnProperty.call(iconLoaders, value);
}

export function getIconLoader(iconId: string): NativeIconLoader | null {
  return isNativeIconId(iconId) ? iconLoaders[iconId] : null;
}

export async function loadIconById(
  iconId: string
): Promise<NativeIconComponent | null> {
  const loader = getIconLoader(iconId);
  if (!loader) {
    return null;
  }

  const module = await loader();
  return module.default;
}
