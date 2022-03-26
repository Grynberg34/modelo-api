const passport = require('passport');
const jwt = require('jsonwebtoken');

let jwtOptions = {};
jwtOptions.secretOrKey = process.env.JWT_KEY;

module.exports = {
  autenticar: function (req,res) {
    passport.authenticate('google', {session: false}, 
    function (err, user, info){
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      return res.status(200).json({ "mensagem" : 'Token gerado', token: token });
    }) (req, res)
  }
}