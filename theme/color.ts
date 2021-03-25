import hexToRgba from 'hex-to-rgba';

import type { Color } from './types';

const color = (name: string, hex: string): Color => ({
  name,
  hex,
  rgba: (opacity: number): string => hexToRgba(hex, opacity),
});

export default color;
