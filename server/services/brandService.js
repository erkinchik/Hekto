const db = require('../db')

class BrandService {
    async createBrand(name){
        const newBrand = await db.query('INSERT INTO brand (name) values ($1) RETURNING *',[name])
        return newBrand.rows[0]
    }
    async getAll(){
        const brands = await db.query('SELECT * FROM brand')
        return brands.rows
    }
}

module.exports = new BrandService()