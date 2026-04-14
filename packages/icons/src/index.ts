// Re-export everything as named exports
export * from './outline';

// Import everything into a single object and export it as default
import * as Outline from './outline';

export default {
  ...Outline,
};
