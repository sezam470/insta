const {apiUri} = require('./utils');

module.exports = (app) => {
  app.get(apiUri('auth/login'), (_, response) => {
    response.json(
      {
        token: '773102001',
      },
    );
  });
};
