const typeService = require('../services/typeService')
class TypeController {
    async create(req,res,next){
        try{
            const {name} = req.body
            const type = await typeService.createType(name)

            res.json(type)
        }
        catch (e) {
            next(e.message)
        }


    }
    async get(req,res){
        res.json(await typeService.getAll())
    }

    async update(req,res){

    }
    async delete(req,res){

    }



}


module.exports = new TypeController()