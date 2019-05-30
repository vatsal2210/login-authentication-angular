/*var jwt = require('jsonwebtoken');
var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	User = require('../models/user'),
    configAuth = require('../config/auth'),


    mongoose = require('mongoose'),
	db = mongoose.connection,
	collection = db.collection('users'),
	collection1 = db.collection('search'),
    ObjectId = mongoose.Types.ObjectId,
    LocalStrategy = require('passport-local').Strategy,
	FacebookStrategy = require('passport-facebook').Strategy,
	TwitterStrategy = require('passport-twitter').Strategy,
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	GithubStrategy = require('passport-github').Strategy;
	LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
    
    passport.use(new LocalStrategy({
        usernameField: 'email'
      },
      function(username, password, done) {
        User.findOne({ email: username }, function (err, user) {
          if (err) { return done(err); }
          // Return if user not found in database
          if (!user) {
            return done(null, false, {
              message: 'User not found'
            });
          }
          // Return if password is wrong
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: 'Password is wrong'
            });
          }
          // If credentials are correct, return the user object
          return done(null, user);
        });
      }
    ));
    module.exports = router
    */
   var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
