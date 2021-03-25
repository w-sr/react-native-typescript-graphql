import React, { FC, useEffect, useContext } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useQuery } from '@apollo/client';

import { DarkIndicator } from '@components';
import { AuthContext } from '@context/authContext';
import { TODOLIST_QUERY } from '@graphql/queries';
import { ToDoListItemType } from '@screens/ToDoListItem/types';
import Routes from '@routes';
import theme from '@theme';

import {
  StyledWrapper,
  StyledList,
  StyledTouchableOpacity,
  StyledTaskText,
  StyledDescriptionText,
  StyledLogoutButton,
  StyledLogoutText,
} from './styles';

const ToDoList: FC = () => {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  const { loading, data } = useQuery(TODOLIST_QUERY);

  const logout = (): void => signOut();

  const setNavigationOptions = (): void => {
    navigation.setOptions({
      headerRight: (): JSX.Element => (
        <StyledLogoutButton onPress={logout}>
          <StyledLogoutText>{'Log out'}</StyledLogoutText>
        </StyledLogoutButton>
      ),
    });
  };

  useEffect(() => {
    setNavigationOptions();
  }, []);

  return (
    <StyledWrapper>
      {data && data.allTodos && data.allTodos.length > 0 && (
        <StyledList
          data={data.allTodos}
          renderItem={({ item }: ListRenderItemInfo<ToDoListItemType>): JSX.Element => (
            <StyledTouchableOpacity onPress={(): void => navigation.navigate(Routes.ToDoListItem, { id: item.id })}>
              <StyledTaskText>{'Task Name: ' + item.task}</StyledTaskText>
              <StyledDescriptionText>{'Description: ' + item.description}</StyledDescriptionText>
            </StyledTouchableOpacity>
          )}
          keyExtractor={({ id }): string => id.toString()}
        />
      )}
      <DarkIndicator loading={loading} />
    </StyledWrapper>
  );
};

export const ToDoListptions: StackNavigationOptions = {
  headerTitle: 'List',
  headerTitleStyle: {
    fontFamily: theme.fontWeights.medium.fontName,
    fontSize: theme.fontSizes.small.pixels,
    color: theme.colors.black.hex,
  },
  headerLeft: () => null,
  headerStyle: { backgroundColor: theme.colors.white.hex },
};

export default ToDoList;
