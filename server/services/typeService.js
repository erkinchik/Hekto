const db = require('../db')

class TypeService {
    async createType(name){
       const newType = await db.query('INSERT INTO type (name) values ($1) RETURNING *',[name])
       return newType.rows[0]
    }
    async getAll(){
        const types = await db.query('SELECT * FROM type')
        return types.rows
    }
}

module.exports =  new TypeService()