var Repository = require('./repository'),
    ReviewBoard = require('./reviewboard'),
    Bugzilla = require('./bugzilla');
var config = require('../config');

exports.repository = new Repository(config.REPOSITORY);

var rbOptions = {
  url: config.REVIEWBOARD_URL,
  username: config.REVIEWBOARD_USERNAME,
  password: config.REVIEWBOARD_PASSWORD,
  repository: config.REVIEWBOARD_REPOSITORY
};
exports.reviewboard = new ReviewBoard(rbOptions);

var bzOptions = {
  url: config.BUGZILLA_URL,
  apiUrl: config.BUGZILLA_API_URL
};
exports.bugzilla = new Bugzilla(bzOptions);
