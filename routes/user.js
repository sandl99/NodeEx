const express  = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.showAll)
router.post('/showByID', UserController.showByID)
router.post('/store', UserController.store)
router.post('/updateByID', UserController.updateByID)
router.post('/deleteByID', UserController.destroyByID)

module.exports = router
