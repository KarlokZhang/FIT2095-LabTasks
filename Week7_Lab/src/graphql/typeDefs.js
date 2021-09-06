const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Actor {
    _id: ID!
    name: String
    bYear: Int
    movies: [Movie]
  }

  type Movie {
    _id: ID!
    title: String
    year: Int
    actors: [Actor]
  }

  type Query {
    getAllMovies: [Movie]
    getMovieById(id: String): Movie
    getMoviesBetweenYear(fromYear: Int, toYear: Int): [Movie]
    getAllActors: [Actor]
    getActorById(id: String): Actor
  }
`;

module.exports = typeDefs;
