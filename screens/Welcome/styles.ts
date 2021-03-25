import styled from 'styled-components/native';

import { Text, RoundButton } from '@components';
import { Layout } from '@lib';
import theme from '@theme';

export const StyledWrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSvgWrapper = styled.View`
  margin-bottom: ${theme.sizes.base.pixels * 10}px;
`;

export const StyledButtonsWrapper = styled.View`
  width: ${Layout.screen.width}px;
  padding-left: ${theme.sizes.base.pixels * 23}px;
  padding-right: ${theme.sizes.base.pixels * 23}px;
`;

export const StyledRegisterButton = styled(RoundButton)`
  margin-bottom: ${theme.sizes.base.pixels * 7.5}px;
`;

export const StyledRegisterButtonText = styled(Text)`
  color: ${theme.colors.white.hex};
  text-align: center;
  font-size: ${theme.fontSizes.medium.pixels}px;
  font-weight: ${theme.fontWeights.medium.numerical};
  padding: ${theme.sizes.base.pixels * 6.5}px;
`;

export const StyledLoginButton = styled(RoundButton)`
  border: ${theme.sizes.base.pixels * 0.5}px solid ${theme.colors.white.hex};
  margin-bottom: ${theme.sizes.base.pixels * 9.5}px;
`;

export const StyledLoginButtonText = styled(Text)`
  color: ${theme.colors.white.hex};
  text-align: center;
  font-size: ${theme.fontSizes.medium.pixels}px;
  font-weight: ${theme.fontWeights.medium.numerical};
  padding: ${theme.sizes.base.pixels * 6.5}px;
`;
