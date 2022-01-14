const brandService = require('../services/brandService')

class BrandController {
    async create(req,res){
        try{
            const {name} = req.body
            const brand= await brandService.createBrand(name)

            res.json(brand)
        }
        catch (e) {
            res.json(e)
        }
    }
    async get(req,res){
        res.json(await brandService.getAll())
    }

    async update(req,res){

    }
    async delete(req,res){

    }


}


module.exports = new BrandController()