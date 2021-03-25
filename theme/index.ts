import Layout from '../lib/Layout';

import color from './color';
import fontWeight from './fontWeight';
import size from './size';

const fontSizeNormalDevice = {
  smallest: size('smallest', 10),
  smaller: size('smaller', 12),
  small: size('small', 14),
  medium: size('medium', 16),
  large: size('large', 18),
  larger: size('larger', 20),
  largest: size('largest', 22),
  sLargest: size('sLargest', 32),
};

const fontSizeSmallDevice = {
  smallest: size('smallest', 7),
  smaller: size('smaller', 9),
  small: size('small', 11),
  medium: size('medium', 13),
  large: size('large', 15),
  larger: size('larger', 17),
  largest: size('largest', 19),
  sLargest: size('sLargest', 40),
};

const fontSizes = Layout.isSmallDevice ? fontSizeSmallDevice : fontSizeNormalDevice;

const theme = {
  colors: {
    white: color('white', '#FFFFFF'),
    black: color('black', '#000000'),
    green: color('green', '#5CC797'),
    darkGreen: color('darkGreen', '#52C994'),
    greyText: color('greyText', '#929292'),
    placeholder: color('placeholder', '#C2C2C2'),
    backgroundColor: color('backgroundColor', '#F6F6F6'),
    titleGrey: color('titleGrey', '#434343'),
    disabled: color('disabled', '#EEEEEE'),
  },
  fontWeights: {
    thin: fontWeight('thin', 100),
    light: fontWeight('light', 300),
    regular: fontWeight('regular', 400),
    medium: fontWeight('medium', 500),
    bold: fontWeight('bold', 700),
    black: fontWeight('black', 900),
  },
  sizes: {
    base: size('base', 2),
  },
  fontSizes,
};

export default theme;
