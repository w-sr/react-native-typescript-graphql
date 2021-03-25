import type { Size } from './types';

const size = (name: string, pixels: number): Size => ({
  name,
  pixels,
});

export default size;
