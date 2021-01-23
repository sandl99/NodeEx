const express  = require('express')
const router = express.Router()

const DeviceController = require('../controllers/DeviceController')

router.get('/', DeviceController.showAll)
router.post('/showByID', DeviceController.showByID)
router.post('/showByUserID', DeviceController.showByUserID)
router.post('/store', DeviceController.store)
router.post('/updateByID', DeviceController.updateByID)
router.post('/deleteByID', DeviceController.destroyByID)

module.exports = router
