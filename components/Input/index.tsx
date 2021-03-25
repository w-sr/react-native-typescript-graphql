import React, { FC, useState } from 'react';

import { Controller } from 'react-hook-form';
import { StyledInput } from './styles';

import type { Props } from './types';

const Input: FC<Props> = ({
  control,
  name,
  style,
  placeholder,
  returnKeyType,
  keyboardType,
  secureTextEntry,
  inputRef,
  onSubmitEditing,
  defaultValue = '',
  multiline,
  selectionColor,
  maxLength,
  inputAccessoryViewID,
}) => {
  const value = control.getValues()[name];

  const [isFocused, setIsFocused] = useState(false);
  const isFilled = value?.length > 0;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ onChange, onBlur, value }): JSX.Element => (
        <StyledInput
          onBlur={(): void => {
            onBlur();
            setIsFocused(false);
          }}
          onFocus={(): void => setIsFocused(true)}
          onSubmitEditing={onSubmitEditing}
          isFocused={isFocused}
          isFilled={isFilled}
          value={!!value?.length ? value : undefined}
          onChangeText={onChange}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          style={style}
          ref={inputRef}
          multiline={multiline}
          selectionColor={selectionColor}
          maxLength={maxLength}
          inputAccessoryViewID={inputAccessoryViewID}
        />
      )}
    />
  );
};

export default Input;
