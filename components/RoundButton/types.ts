import { ViewProps } from 'react-native';

export interface Props extends ViewProps {
  onPress?: () => void;
  disabled?: boolean;
}

export interface StyledTouchableOpacityProps {
  layoutHeight: number;
}
