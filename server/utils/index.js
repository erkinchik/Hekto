const jwt = require('jsonwebtoken')

module.exports.generateJwt = (id,email,role)=>{
    return jwt.sign({id,email,role},process.env.SECRET_KEY,{expiresIn:'24h'})
}