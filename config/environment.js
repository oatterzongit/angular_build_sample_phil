var _ = require('lodash');

var localEnvVars = {
  TITLE:      'question_everything_app',
  SAFE_TITLE: 'question_everything_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
