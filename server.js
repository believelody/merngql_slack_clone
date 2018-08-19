const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const db = require('./config/keys').MONGO_URI;
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//  typeDefs and resolvers are part of schema
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => console.log(`Server is running on ${url}`));
