const _ = require('lodash');

const formatGraphQLErrors = (error) => {
  const errorDetails = _.get(error, 'originalError.response.body');
  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {}

  return null;
};

module.exports = formatGraphQLErrors;
