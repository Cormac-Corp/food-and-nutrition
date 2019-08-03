import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query';
import Mutation from "./resolvers/Mutation"
require('./db/db')
import jwt from "jsonwebtoken";
import auth from "./middleware/auth";
import User from "./models/user"
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const middleware = {
  Query: {
    me: auth
  },
  Mutation: {
    logout: auth,
    logoutAll: auth,
    deleteMe: auth
  }
}
const server = new GraphQLServer({ 
    typeDefs:'src/schema.graphql', 
    resolvers: {
      Query,
      Mutation
    },
    context: req => {
      return {
        ...req,
        User
      }
    },
    middlewares:[middleware]
})

server.start({
  cors:{
    origin:true
  },
  endpoint:'/graphql',
  playground:'/playground'
},() => console.log('Server is running on localhost:4000'))