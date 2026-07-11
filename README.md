# Native systems icons package
This package contains components and types, which are used across native systems software projects.

## React-free icon identifiers

The root package exports React components and requires React at runtime. Non-React
consumers can import every public icon name without loading the component bundle:

```ts
import { iconNames } from '@native-systems/icons/identifiers';

for (const iconName of iconNames) {
  // e.g. validate or enumerate icon identifiers in a backend service
}
```

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
