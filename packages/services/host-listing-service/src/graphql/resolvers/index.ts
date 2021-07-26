import { IResolvers } from 'graphql-tools';
import { listingResolver } from "./listing";

const resolvers: IResolvers = {
  Query: {
    ...listingResolver.Query
  }
}

export default resolvers;