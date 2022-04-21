const Router = require('express')
const router = new Router()
const deviceRouter = require('./productRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')

router.use('/user',userRouter)
router.use('/category',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)

module.exports = router