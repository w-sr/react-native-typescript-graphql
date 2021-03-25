import styled from 'styled-components/native';
import theme from '@theme';
import { Layout } from '@lib';

export const StyledWrapper = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: ${Layout.screen.width}px;
  height: ${Layout.screen.height}px;
`;

export const StyledBackground = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.black.hex};
  opacity: 0.5;
`;
