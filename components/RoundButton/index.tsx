import React, { FC, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { StyledTouchableOpacity } from './styles';
import { Props } from './types';

const RoundButton: FC<Props> = ({ onPress, disabled, children, style }) => {
  // Calculate the height of the children and create a perfect circle
  const [layoutHeight, setLayoutHeight] = useState(0);
  const onLayout = (e: LayoutChangeEvent): void => {
    setLayoutHeight(e.nativeEvent.layout.height);
  };

  return (
    <StyledTouchableOpacity
      disabled={disabled}
      onPress={onPress}
      layoutHeight={layoutHeight}
      onLayout={onLayout}
      style={style}>
      {children}
    </StyledTouchableOpacity>
  );
};

export default RoundButton;
