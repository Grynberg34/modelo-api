const passport = require('passport');
const jwt = require('jsonwebtoken');

var jwtOptions = {};
jwtOptions.secretOrKey = process.env.JWT_KEY;

module.exports = {
  autenticar: function (req,res) {
    passport.authenticate('google', {session: false}, 
    function (err, user, info){
      var payload = { id: user.id };
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      return res.status(200).json({ "mensagem" : 'Token gerado', token: token });
    }) (req, res)
  }
}