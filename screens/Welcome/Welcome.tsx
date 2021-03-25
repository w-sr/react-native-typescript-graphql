import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import Logo from '@assets/logo.svg';
import Routes from '@routes';

import {
  StyledWrapper,
  StyledSvgWrapper,
  StyledButtonsWrapper,
  StyledRegisterButton,
  StyledRegisterButtonText,
  StyledLoginButton,
  StyledLoginButtonText,
} from './styles';

const Welcome: FC = () => {
  const { navigate } = useNavigation();

  return (
    <StyledWrapper>
      <StyledSvgWrapper>
        <Logo width="100" height="100"></Logo>
      </StyledSvgWrapper>

      <StyledButtonsWrapper>
        <StyledRegisterButton
          onPress={(): void => {
            navigate(Routes.RegistrationStack, { screen: Routes.Registration });
          }}>
          <StyledRegisterButtonText>{'Register'}</StyledRegisterButtonText>
        </StyledRegisterButton>

        <StyledLoginButton onPress={(): void => navigate(Routes.RegistrationStack, { screen: Routes.Login })}>
          <StyledLoginButtonText>{'Login'}</StyledLoginButtonText>
        </StyledLoginButton>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
};

export default Welcome;
