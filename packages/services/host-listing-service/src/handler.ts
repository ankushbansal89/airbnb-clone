// graphql.js
import { ApolloServer } from 'apollo-server-lambda';
import { connect } from 'mongoose';
import resolvers from './graphql/resolvers/';
import typeDefs from './graphql/typedefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async (_event: any, context: any): Promise<any> => {
    await connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    return context;
  },
});

export const graphqlHandler = server.createHandler();
