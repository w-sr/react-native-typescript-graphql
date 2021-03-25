import React, { FC, useState, useEffect } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useMutation, useQuery } from '@apollo/client';
import Toast from 'react-native-toast-message';

import { DarkIndicator } from '@components';
import { TODOLIST_ITEM_QUERY } from '@graphql/queries';
import { UPDATE_TODO_ITEM } from '@graphql/mutations';
import theme from '@theme';

import {
  StyledWrapper,
  StyledFormWrapper,
  StyledTaskText,
  StyledTaskTextInput,
  StyledDescriptionText,
  StyledDescriptionTextInput,
  StyledSaveButton,
  StyledSaveText,
} from './styles';
import { Params } from './types';

const ToDoListItem: FC = () => {
  const navigation = useNavigation();

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const {
    params: { id },
  } = useRoute<RouteProp<Record<string, Params>, string>>();

  const { loading: queryLoading, data } = useQuery(TODOLIST_ITEM_QUERY, { variables: { id } });
  const [updateToDoItem, { loading: mutationLoading }] = useMutation(UPDATE_TODO_ITEM, {
    onCompleted() {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Updated Successfull!',
      });
    },
    onError() {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Update failed!',
      });
    },
  });

  const save = (): void => {
    updateToDoItem({
      variables: {
        id,
        task,
        description,
      },
    });
  };

  const setNavigationOptions = (): void => {
    navigation.setOptions({
      headerRight: (): JSX.Element => (
        <StyledSaveButton onPress={save}>
          <StyledSaveText>{'Save'}</StyledSaveText>
        </StyledSaveButton>
      ),
    });
  };

  useEffect(() => {
    setNavigationOptions();
  }, [task, description]);

  useEffect(() => {
    setTask(data && data.allTodos?.[0]?.task);
    setDescription(data && data.allTodos?.[0]?.description);
  }, [data]);

  return (
    <StyledWrapper>
      <StyledFormWrapper>
        <StyledTaskText>{'Task Name'}</StyledTaskText>
        <StyledTaskTextInput value={task} placeholder={'Task'} onChangeText={(text: string): void => setTask(text)} />

        <StyledDescriptionText>{'Task Description'}</StyledDescriptionText>
        <StyledDescriptionTextInput
          value={description}
          placeholder={'Description'}
          onChangeText={(text: string): void => setDescription(text)}
        />
      </StyledFormWrapper>

      <DarkIndicator loading={queryLoading || mutationLoading} />
    </StyledWrapper>
  );
};

export const ToDoListItemOptions: StackNavigationOptions = {
  headerTitle: 'Task Detail',
  headerTitleStyle: {
    fontFamily: theme.fontWeights.medium.fontName,
    fontSize: theme.fontSizes.small.pixels,
    color: theme.colors.black.hex,
  },
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.black.hex,
  headerStyle: { backgroundColor: theme.colors.white.hex },
};

export default ToDoListItem;
