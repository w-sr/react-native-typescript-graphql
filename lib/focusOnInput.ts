import { MutableRefObject } from 'react';
import { TextInput } from 'react-native';

const focusOnInput = (ref: MutableRefObject<TextInput>) => (): void => ref?.current?.focus();

export default focusOnInput;
