const express = require('express')

const sensorCtrl = require('../controllers/sensor.controller')
const sensorDB = require('../controllers/dbcontroller/SensorController')
const router = express.Router()

router.route('/')
    .get(sensorDB.showByID, sensorCtrl.getSensor)

router.route('/user')
    .get(sensorDB.showByUserID, sensorCtrl.getSensorByUserID)

router.route('/addSensor')
    .post(sensorDB.store)

router.route('/delSensor')
    .delete(sensorDB.destroyByID)

module.exports = router