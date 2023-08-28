export type ColorCorrect = '#538d4e';
export type ColorPresent = '#b59f3b';

export type Color = ColorCorrect | ColorPresent | '';

export interface ColorMap {
  [index: number]: Color;
}
