import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type listing {
    title: String,
    description: String    
  }
  type Query {
    getlisting: listing
  }
`;

export default typeDefs;