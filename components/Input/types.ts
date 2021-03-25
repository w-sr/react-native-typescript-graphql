import type { MutableRefObject } from 'react';
import type { Control } from 'react-hook-form';
import type { KeyboardType, ReturnKeyType, TextInput, TextStyle } from 'react-native';

export type Props = {
  name: string;
  control: Control;
  placeholder: string;
  inputRef?: MutableRefObject<TextInput>;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  defaultValue?: string;
  style?: TextStyle;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?: () => void;
  multiline?: boolean;
  selectionColor?: string;
  maxLength?: number;
  inputAccessoryViewID?: string;
};
