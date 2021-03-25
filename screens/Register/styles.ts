import styled from 'styled-components/native';

import { Input, NextButton, SceneContainer } from '@components';
import theme from '@theme';

export const StyledWrapper = styled(SceneContainer)`
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.Text`
  font-size: ${theme.sizes.base.pixels * 13.5}px;
  font-weight: ${theme.fontWeights.bold.numerical};

  letter-spacing: ${theme.sizes.base.pixels * 1.55}px;
  line-height: ${theme.sizes.base.pixels * 20}px;

  margin-top: ${theme.sizes.base.pixels * 13}px;
`;

export const StyledMainWrapper = styled.View`
  margin: ${theme.sizes.base.pixels * 7.5}px;
`;

export const StyledCloseWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledFormWrapper = styled.KeyboardAvoidingView`
  margin-top: ${theme.sizes.base.pixels * 25}px;
`;

export const StyledEmailInput = styled(Input)`
  margin-bottom: ${theme.sizes.base.pixels * 5}px;
`;

export const StyledNextButton = styled(NextButton)`
  margin-top: ${theme.sizes.base.pixels * 15}px;
`;

export const StyledFooterWrapper = styled.View`
  align-items: center;
  width: 100%;
`;

export const StyledSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${theme.colors.placeholder.hex};
`;

export const StyledLoginText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 5}px;
  margin: ${theme.sizes.base.pixels * 10}px 0 ${theme.sizes.base.pixels * 16}px 0;
`;

export const StyledLoginCta = styled.Text`
  color: ${theme.colors.darkGreen.hex};
`;
