require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const formatGraphQLErrors = require('./middlewares/formatGraphQLErrors');

const router = require('./routes');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: formatGraphQLErrors,
  playground: true,
  introspection: true,
});

const app = express();

server.applyMiddleware({ app });

const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use('/', router);

module.exports = app;
