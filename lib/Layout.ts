import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PADDING_HORIZONTAL = 15;
const isSmallDevice = width < 375;

const screen = {
  width,
  height,
};

const Layout = { screen, isSmallDevice, PADDING_HORIZONTAL };

export default Layout;
