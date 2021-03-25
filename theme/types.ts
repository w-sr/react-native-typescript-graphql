export type Theme = {
  colors: { [colorName: string]: Color };
  fontWeights: { [fontWeight: string]: FontWeight };
  sizes: { [size: string]: Size };
  shadows: { [shadow: string]: string };
  borderRadius: { [borderRadius: string]: Size };
  transitions: { [transition: string]: string };
};

export type Color = {
  name: string;
  hex: string;
  rgba: (opacity: number) => string;
};

export type FontWeight = { name: string; numerical: number; fontName?: string };

export type Size = {
  name: string;
  pixels: number;
};
