import React, { FC } from 'react';
import { StyledSafeAreaView } from './styles';
import { Props } from './types';

const SceneContainer: FC<Props> = ({
  forceInset = { top: 'never', bottom: 'never' },
  style,
  children,
}): JSX.Element => (
  <StyledSafeAreaView style={style} forceInset={forceInset} edges={['top', 'right', 'bottom', 'left']}>
    {children}
  </StyledSafeAreaView>
);

export default SceneContainer;
