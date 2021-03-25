import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
  query loginUser($phone: String!, $password: String!) {
    _allUsersMeta(filter: { phone: $phone, password: $password }) {
      count
    }
  }
`;

export const TODOLIST_QUERY = gql`
  query todoListQuery {
    allTodos {
      id
      task
      description
    }
  }
`;

export const TODOLIST_ITEM_QUERY = gql`
  query todoItemQuery($id: ID!) {
    allTodos(filter: { id: $id }) {
      id
      task
      description
    }
  }
`;
