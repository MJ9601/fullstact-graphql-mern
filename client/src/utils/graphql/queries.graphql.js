import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      _id
      name
      email
    }
  }
`;

export const GET_CLIENT_BY_ID = gql`
  query getClient($id: ID!) {
    client(_id: $id) {
      _id
      name
      email
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      title
      description
      image
      price
      status
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
      _id
      title
      description
      image
      price
      status
      client {
        name
        email
        _id
      }
    }
  }
`;

export const FILTER_PRODUCTS = gql`
  query FilterProducts($client: ID!) {
    filterProducts(client: $client) {
      title
      price
      description
      status
      _id
    }
  }
`;
