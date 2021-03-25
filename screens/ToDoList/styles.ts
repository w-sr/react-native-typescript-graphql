import styled from 'styled-components/native';

import { SceneContainer } from '@components';
import theme from '@theme';

export const StyledWrapper = styled(SceneContainer)`
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const StyledList = styled.FlatList`
  margin-top: ${theme.sizes.base.pixels * 20}px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: ${theme.sizes.base.pixels * 10}px;
`;

export const StyledTaskText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 10}px;
  font-weight: ${theme.fontWeights.bold.numerical};
  margin-bottom: ${theme.sizes.base.pixels * 2.5}px;
`;

export const StyledDescriptionText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 7}px;
`;

export const StyledLogoutButton = styled.TouchableOpacity``;

export const StyledLogoutText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 7}px;
  font-weight: ${theme.fontWeights.medium.numerical};
  color: ${theme.colors.black.hex};
  margin-right: ${theme.sizes.base.pixels * 5}px;
`;
