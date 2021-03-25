import styled from 'styled-components/native';

import { SceneContainer } from '@components';
import theme from '@theme';

export const StyledWrapper = styled(SceneContainer)`
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const StyledList = styled.FlatList`
  margin-top: ${theme.sizes.base.pixels * 20}px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: ${theme.sizes.base.pixels * 10}px;
`;

export const StyledFormWrapper = styled.KeyboardAvoidingView`
  margin-top: ${theme.sizes.base.pixels * 25}px;
  padding: ${theme.sizes.base.pixels * 6}px;
`;

export const StyledTaskText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 10}px;
  font-weight: ${theme.fontWeights.bold.numerical};
  margin-bottom: ${theme.sizes.base.pixels * 5}px;
`;

export const StyledTaskTextInput = styled.TextInput`
  background-color: ${theme.colors.backgroundColor.hex};
  border: 1px solid ${theme.colors.greyText.hex};
  padding: ${theme.sizes.base.pixels * 6.5}px ${theme.sizes.base.pixels * 4}px ${theme.sizes.base.pixels * 6.5}px
    ${theme.sizes.base.pixels * 4}px;
  margin-bottom: ${theme.sizes.base.pixels * 10}px;
`;

export const StyledDescriptionText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 10}px;
  font-weight: ${theme.fontWeights.bold.numerical};
  margin-bottom: ${theme.sizes.base.pixels * 5}px;
`;

export const StyledDescriptionTextInput = styled.TextInput`
  background-color: ${theme.colors.backgroundColor.hex};
  border: 1px solid ${theme.colors.greyText.hex};
  padding: ${theme.sizes.base.pixels * 6.5}px ${theme.sizes.base.pixels * 4}px ${theme.sizes.base.pixels * 6.5}px
    ${theme.sizes.base.pixels * 4}px;
`;

export const StyledSaveButton = styled.TouchableOpacity``;

export const StyledSaveText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 7}px;
  font-weight: ${theme.fontWeights.medium.numerical};
  color: ${theme.colors.black.hex};
  margin-right: ${theme.sizes.base.pixels * 5}px;
`;
