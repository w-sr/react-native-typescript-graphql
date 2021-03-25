import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import theme from '@theme';

export const StyledBackbuttonWrapper = styled(Pressable)`
  width: ${theme.sizes.base.pixels * 10}px;
  height: ${theme.sizes.base.pixels * 10}px;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
