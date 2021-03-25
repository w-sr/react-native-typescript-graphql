import type { FontWeight } from './types';

const fontWeight = (name: string, numerical: number): FontWeight => ({
  name,
  numerical,
});

export default fontWeight;
