import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation($id: ID!, $phone: String!, $password: String!) {
    createUser(id: $id, phone: $phone, password: $password) {
      id
      phone
      password
    }
  }
`;

export const UPDATE_TODO_ITEM = gql`
  mutation($id: ID!, $task: String!, $description: String!) {
    updateTodo(id: $id, task: $task, description: $description) {
      id
      task
      description
    }
  }
`;
