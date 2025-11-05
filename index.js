const { apolloServer, ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/userSchemas');
const resolvers = require('./controllers/userController');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Servidor graphql ejecutandose en ${url}`)
}); 