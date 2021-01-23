const express  = require('express')
const router = express.Router()

const SensorDataController = require('../controllers/SensorDataController')

router.get('/', SensorDataController.showAll)
router.post('/showBySensorID', SensorDataController.showBySensorID)
router.post('/store', SensorDataController.store)
module.exports = router
