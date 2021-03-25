import theme from '@theme';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { StyledWrapper, StyledBackground } from './styles';
import { Props } from './types';

// loading indicator during api call
const DarkIndicator: FC<Props> = ({ loading }) =>
  loading ? (
    <StyledWrapper>
      <StyledBackground />
      <ActivityIndicator color={theme.colors.white.hex} />
    </StyledWrapper>
  ) : (
    <></>
  );

export default DarkIndicator;
