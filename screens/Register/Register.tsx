import React, { FC, useRef, useEffect, useContext } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import Toast from 'react-native-toast-message';

import { GoBackCloseButton, Input, DarkIndicator } from '@components';
import { AuthContext } from '@context/authContext';
import { CREATE_USER } from '@graphql/mutations';
import { focusOnInput } from '@lib';
import Routes from '@routes';

import {
  StyledWrapper,
  StyledTitle,
  StyledEmailInput,
  StyledMainWrapper,
  StyledCloseWrapper,
  StyledFormWrapper,
  StyledNextButton,
  StyledFooterWrapper,
  StyledSeparator,
  StyledLoginText,
  StyledLoginCta,
} from './styles';
import type { FormValues } from './types';

const Register: FC = () => {
  const passwordRef = useRef<TextInput>();

  const { navigate } = useNavigation();
  const { signUp } = useContext(AuthContext);
  const [register, { loading }] = useMutation(CREATE_USER, {
    onCompleted: () => signUp(),
    onError: () => Toast.show({ type: 'error', position: 'bottom', text1: 'Register Failed!' }),
  });

  const { control, handleSubmit, errors, trigger, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        emailOrPhone: yup.string().min(1).required(),
        password: yup.string().min(8).required(),
      }),
    ),
  });

  // Force validation trigger
  useEffect(() => {
    trigger();
  }, [trigger]);

  const isValid = !Object.keys(errors).length;
  const onSubmit = ({ emailOrPhone, password }: FormValues): void => {
    setValue('emailOrPhone', '');
    setValue('password', '');
    register({
      variables: {
        id: 3,
        phone: emailOrPhone,
        password,
      },
    });
  };

  const navigateToLogin = (): void => {
    navigate(Routes.Login);
  };

  return (
    <StyledWrapper>
      <StyledMainWrapper>
        <StyledCloseWrapper>
          <GoBackCloseButton onPress={() => navigate(Routes.Welcome)} />
        </StyledCloseWrapper>

        <StyledTitle>{'Create your account'}</StyledTitle>

        <StyledFormWrapper>
          <StyledEmailInput
            control={control}
            name="emailOrPhone"
            placeholder={'Email or Phone'}
            returnKeyType="next"
            onSubmitEditing={focusOnInput(passwordRef)}
          />

          <Input
            control={control}
            name="password"
            inputRef={passwordRef}
            placeholder={'Password'}
            secureTextEntry
            onSubmitEditing={handleSubmit(onSubmit)}
          />

          <StyledNextButton title={'Submit'} onPress={handleSubmit(onSubmit)} disabled={!isValid}>
            {'Register'}
          </StyledNextButton>
        </StyledFormWrapper>
      </StyledMainWrapper>

      <StyledFooterWrapper>
        <StyledSeparator />
        <StyledLoginText onPress={navigateToLogin}>
          {'Login'} <StyledLoginCta>{'Login'}</StyledLoginCta>
        </StyledLoginText>
      </StyledFooterWrapper>
      <DarkIndicator loading={loading} />
    </StyledWrapper>
  );
};

export default Register;
