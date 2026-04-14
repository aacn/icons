# Native systems icons

## Limitations
The .d.ts plugin that we use in the build process flattens type definitions instead of merging them. This applies severe limitations to the source code:
1. Every export in every TypeScript file considered exported from the package (i.e. part of public API). Mark internal exports (internal API) with @internal jsdoc tag to prevent this, or declare internal modules with internal option.
2. Default exports supported only at the top level and in entry points (see below).
3. Exported symbols should be unique across the code base.
4. Exports should not be renamed when re-exporting them. 

Aliasing is still possible.
