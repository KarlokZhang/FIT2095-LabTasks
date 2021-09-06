const Query = require('./Query');

const resolvers = { Query };

module.exports = resolvers;

// const Movie = require('../../models/movies');

// module.exports = {
//   Query: {
//     movies: async () => {
//       try {
//         const movies = await Movie.find().populate('actors').exec();
//         return movies;
//       } catch (error) {
//         throw error;
//       }
//     },
//   },
// };
