import React, { FC } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Props } from './types';
import { StyledBackbuttonWrapper } from './styles';

// close button
const GoBackCloseButton: FC<Props> = ({ onPress }) => {
  const { goBack } = useNavigation();
  return (
    <StyledBackbuttonWrapper onPress={onPress || goBack}>
      <Image source={require('@assets/close_btn.png')} />
    </StyledBackbuttonWrapper>
  );
};

export default GoBackCloseButton;
