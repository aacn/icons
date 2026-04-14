# Native systems component package
This package contains components and types, which are used across native systems software projects.

## Steps to deploy new version
1. Update package version.
2. Build project via `yarn build`
3. Publish build via `npm publish`
4. Push changes to repository


## Tailwind components
Components must be exposed to tailwind for preflight and purging/compilation to work:
- v4: `@source "../node_modules/@native-systems/ui/**";`
- v3: `contents: [".node_modules/@native-systems/ui/**"];`
