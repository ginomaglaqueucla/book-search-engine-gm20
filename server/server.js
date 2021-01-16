const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

<<<<<<< HEAD
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// integrate Apollo server with the Express application as middleware
server.applyMiddleware({ app });

=======
const app = express();
const PORT = process.env.PORT || 3001;

>>>>>>> 4513b14301ef715738318f6d9b35f01c22414fcb
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
<<<<<<< HEAD
  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
=======
>>>>>>> 4513b14301ef715738318f6d9b35f01c22414fcb
});
