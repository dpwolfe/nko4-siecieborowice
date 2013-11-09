var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({  
    domain:       'siecieborowice.auth0.com',
    clientID:     '3gHv658cxWWnphHShNmjVl1npoyvySVf',
    clientSecret: 'n0ckKOcAgTFxZjuFcQYGT_mG8bCariFZi9sLrXXHrh6ONo15C6tPqA1yfPncCX6b',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, profile, done) {
    //Some tracing info
    console.log('profile is', profile);
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user); 
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy; 