'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    gps = require('./controllers/gps'),
    commands = require('./controllers/commands'),
    numbers = require('./controllers/numbers'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/gps', gps.create);
  app.get('/api/gps', gps.index);

  app.post('/api/commands', commands.create);
  app.get('/api/commands', commands.index);

  app.post('/api/number', numbers.create);
  app.get('/api/numbers', numbers.index);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
