export * from './outline';
export * from './filled';
export * from './chars';

import * as Outline from './outline';
import * as Filled from './filled';
import * as Chars from './chars';

export { Outline, Filled, Chars };

export default {
  ...Outline,
  ...Filled,
  ...Chars,
};
