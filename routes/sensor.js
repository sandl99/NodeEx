const express  = require('express')
const router = express.Router()

const SensorController = require('../controllers/SensorController')

router.get('/', SensorController.showAll)
router.post('/showByID', SensorController.showByID)
router.post('/showByUserID', SensorController.showByUserID)
router.post('/store', SensorController.store)
router.post('/updateByID', SensorController.updateByID)
router.post('/deleteByID', SensorController.destroyByID)

module.exports = router
