import gql from 'graphql-tag';

export const GET_ALL_CONTACTS_SUBSCRIPTION = gql`
  subscription getAllContacts {
    contacts {
      id
      name
      description
      relationship
      phone
    }
  }
`