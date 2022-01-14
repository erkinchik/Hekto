const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')


router.get('/',brandController.get)
router.post('/',brandController.create)
// router.put('/',brandController.create)

module.exports = router