import gql from 'graphql-tag';

// export const GET_ALL_CONTACTS = gql`
//   query getAllContacts {
//     contacts {
//       id
//       name
//       description
//       relationship
//       phone
//       avatar {
//         url
//       }
//     }
//   }
// `

export const GET_ALL_CONTACTS = gql`
  query getAllContacts {
    contacts {
      id
      name
      description
      relationship
      phone
    }
  }
`