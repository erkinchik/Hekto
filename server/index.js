require('dotenv').config()


const express = require('express')
const fileUpload = require('express-fileupload')
// const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const errHandler = require('./middleware/ErrorHandlerMiddleware')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(fileUpload({}))
app.use('/', router)

///
app.use(errHandler)


const start = async () => {
    try{
        // await sequelize.authenticate();
        // await sequelize.sync()
        app.listen(PORT,()=> console.log(`server was started on port ${PORT}`))
    }catch (e) {
        console.log(e);
    }
}
start()