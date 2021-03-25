import styled from 'styled-components/native';
import theme from '@theme';
import { StyledTouchableOpacityProps } from './types';

export const StyledTouchableOpacity = styled.TouchableOpacity<StyledTouchableOpacityProps>`
  background-color: ${({ disabled }): string => (disabled ? theme.colors.disabled.hex : theme.colors.green.hex)};
  border-radius: ${({ layoutHeight }): number => layoutHeight * 0.5}px;
`;
