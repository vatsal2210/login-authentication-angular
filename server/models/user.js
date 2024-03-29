var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', userSchema);



/*var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');	                                  //The maximum input length is 72 bytes (note that UTF8 encoded characters use up to 4 bytes) and the length of generated hashes is 60 characters.
				
?var UserSchema = mongoose.Schema({	                                //Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
	local: {	
		username: 	{type:String},
		password: 	{type:String},
		email: 		{type:String},
		name: 		{type:String},
		contactno: 	{type:Number},
		date: 		{type:Date, default: Date.now },
	},

	facebook: {
		id:		{type:String},
		token: 		{type:String},
		email: 		{type:String},
		name: 		{type:String},
		username: {type:String},
	  },
	  
	twitter: {
		id: 		  {type:String},
		token: 		  {type:String},
		displayName:{type:String},
		name: 		  {type:String},
	  },
	  
	google: {
		id: 		{type:String},
		token: 		{type:String},
		email: 		{type:String},
		name: 		{type:String},
	  },
	 
	github: {
		id: 		{type:String},
		token: 		{type:String},
		email: 		{type:String},
		name: 		{type:String},
	  },
	linkedin: {
		id: 		{type:String},
		token: 		{type:String},
		email: 		{type:String},
		name: 		{type:String},
	  },
});

var User = module.exports = mongoose.model('User', UserSchema);			                      //To use our schema definition, we need to convert our UserSchema into a Model we can work with. 

module.exports.createUser = function(newUser, callback){				                          //Usage - Async
	bcrypt.genSalt(10, function(err, salt) {							//To hash a password:
	    bcrypt.hash(newUser.local.password, salt, function(err, hash) {		                  //Salt : length to generate or salt to use, default to 10
	        newUser.local.password = hash;
	       // hash.save(callback);
	    });
	});
};

module.exports.getUserByUsername = function(username, callback){		             // Only receives a single document as second parameter:
	var query = {'local.username' : username};
	User.findOne(query, callback);
};
	
module.exports.getUserById = function(id, callback){					                  //Same as findOne, but receives a value to search a document by their _id key. This value is subject to casting, so it can be a hex string or a proper ObjectId.
	User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){	  //From : https://www.npmjs.com/package/bcryptjs
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {			        //To check a password
    	if(err) throw err;
    	callback(null, isMatch);												                          // Send callback as isMatch to users.js
	});
};
*/