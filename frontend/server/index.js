const auth = require('./auth');

exports.setRouter = (app) => {
    auth(app);
};
  
