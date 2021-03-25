import theme from '@theme';
import styled from 'styled-components/native';

export const StyledInput = styled.TextInput<{ isFilled: boolean; isFocused: boolean }>`
  padding: ${theme.sizes.base.pixels * 6.5}px ${theme.sizes.base.pixels * 4}px ${theme.sizes.base.pixels * 6.5}px
    ${theme.sizes.base.pixels * 4}px;

  background-color: ${theme.colors.backgroundColor.hex};

  color: ${({ isFocused, isFilled }): string =>
    isFocused || isFilled ? theme.colors.titleGrey.hex : theme.colors.greyText.hex};

  border: 1px solid ${({ isFocused }): string => (isFocused ? theme.colors.titleGrey.hex : theme.colors.greyText.hex)};
`;
