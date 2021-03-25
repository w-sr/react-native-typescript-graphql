import React, { FC, useRef, useEffect, useContext } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useLazyQuery } from '@apollo/client';

import { GoBackCloseButton, Input, DarkIndicator } from '@components';
import { AuthContext } from '@context/authContext';
import { focusOnInput } from '@lib';
import { LOGIN_QUERY } from '@graphql/queries';
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
  StyledRegistrationText,
  StyledRegistrationCta,
} from './styles';
import type { FormValues } from './types';

const Login: FC = () => {
  const passwordRef = useRef<TextInput>();

  const { navigate } = useNavigation();
  const { signIn } = useContext(AuthContext);
  const [login, { loading, data }] = useLazyQuery(LOGIN_QUERY, {
    onError: () => Toast.show({ type: 'error', position: 'bottom', text1: 'Login Failed!' }),
  });

  const { control, handleSubmit, errors, trigger, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        emailOrPhone: yup.string().min(1).required(),
        password: yup.string().min(6).required(),
      }),
    ),
  });

  const isValid = !Object.keys(errors).length;

  const onSubmit = ({ emailOrPhone, password }: FormValues): void => {
    setValue('emailOrPhone', '');
    setValue('password', '');
    login({ variables: { phone: emailOrPhone, password } });
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  if (data && data._allUsersMeta.count > 0) {
    signIn();
  } else if (data && data._allUsersMeta.count === 0) {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Login failed',
    });
  }

  return (
    <StyledWrapper>
      <StyledMainWrapper>
        <StyledCloseWrapper>
          <GoBackCloseButton />
        </StyledCloseWrapper>

        <StyledTitle>{'Enter Your Information'}</StyledTitle>

        <StyledFormWrapper>
          <StyledEmailInput
            control={control}
            name="emailOrPhone"
            defaultValue=""
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
            {'Login'}
          </StyledNextButton>
        </StyledFormWrapper>
      </StyledMainWrapper>

      <StyledFooterWrapper>
        <StyledSeparator />
        <StyledRegistrationText onPress={(): void => navigate(Routes.Registration)}>
          {'Register'} <StyledRegistrationCta>{'Register'}</StyledRegistrationCta>
        </StyledRegistrationText>
      </StyledFooterWrapper>

      <DarkIndicator loading={loading} />
    </StyledWrapper>
  );
};

export default Login;
