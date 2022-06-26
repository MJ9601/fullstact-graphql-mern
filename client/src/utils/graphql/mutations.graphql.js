import { gql } from "@apollo/client";

export const DEL_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(_id: $id) {
      _id
      name
      email
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!) {
    addClient(name: $name, email: $email) {
      _id
      name
      email
    }
  }
`;
export const ADD_PRODUCT = gql`
  mutation addProduct(
    $title: String!
    $price: Number!
    $desc: String!
    $image: String!
    $status: String!
    $client: ID!
  ) {
    addProduct(
      title: $title
      price: $price
      description: $desc
      image: $image
      status: $status
      client: $client
    ) {
      _id
      title
      status
      price
      client {
        name
        email
      }
    }
  }
`;

export const DEL_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(_id: $id) {
      _id
      title
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID!
    $title: String!
    $price: Number!
    $desc: String!
    $image: String!
    $status: String!
  ) {
    updateProduct(
      _id: $id
      title: $title
      price: $price
      description: $desc
      image: $image
      status: $status
    ) {
      title
      price
      image
      status
      description
    }
  }
`;
