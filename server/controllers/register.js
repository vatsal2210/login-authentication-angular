
module.exports.register = function(req, res) {
var user = new User();
user.name = req.body.name;
user.email = req.body.email;

user.setPassword(req.body.password);

user.save(function(err) {
  var token;
  token = user.generateJwt();
  res.status(200);
  res.json({
    "token" : token
  });
});
};