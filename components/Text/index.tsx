import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';
import { StyledText } from './styles';

const Text = ({ ...props }: PropsWithChildren<TextProps>): JSX.Element => <StyledText {...props} />;

export default Text;
