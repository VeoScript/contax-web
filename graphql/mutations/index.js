import gql from 'graphql-tag';

export const ADD_NEW_CONTACT = gql`
  mutation createNewContact($name: String!, $description: String!, $relationship: String!, $phone: String!) {
    createContact(input: {
      data: {
        name: $name,
        description: $description,
        relationship: $relationship,
        phone: $phone
      }
    })
    {
      contact {
        id
        name
        description
        relationship
        phone
      }
    }
  }
`