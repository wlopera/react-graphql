import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $phone: String
    $street: String!
    $city: String!
  ) {
    addPerson(name: $name, phone: $phone, street: $street, city: $city) {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

export const EDIT_NUMBER = gql`
  mutation editNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;
