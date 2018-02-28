const passport = require('passport');
require('./serializers');
require('./local.strategy');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
}