const ApiError = require('../errors/ApiError')

class UserController {
    async registration(req,res){

    }
    async login(req,res){

    }
    async check(req,res,next){
        const {id} = req.query
        res.json({msg: [process.env.DB_NAME,process.env.DB_PORT,process.env.DB_HOST,process.env.DB_PASSWORD,process.env.DB_USER]})
    }


}


module.exports = new UserController()