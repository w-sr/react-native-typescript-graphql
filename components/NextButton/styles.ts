import styled from 'styled-components/native';

import { createAnimatableComponent } from 'react-native-animatable';
import theme from '@theme';

import { TouchableOpacity } from 'react-native';

const AnimatedTouchableOpacity = createAnimatableComponent(TouchableOpacity);

export const StyledButton = styled(AnimatedTouchableOpacity).attrs({ transition: ['backgroundColor' as never] })<{
  activeOpacity: number;
}>`
  color: ${theme.colors.white.hex};
  background-color: ${(props): string =>
    props.disabled ? theme.colors.disabled.rgba(1) : theme.colors.darkGreen.rgba(1)};
  border-radius: ${theme.sizes.base.pixels * 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${theme.sizes.base.pixels * 24}px;
`;

export const StyledButtonText = styled.Text`
  color: ${theme.colors.white.hex};
  font-weight: ${theme.fontWeights.bold.numerical};
`;
