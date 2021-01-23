const SensorData = require('../models/SensorData')

// Show  the list of Sensors
const showAll = (req, res, next) => {
    SensorData.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(err => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// show SensorData by sensorID
const showBySensorID = (req, res, next) => {
    SensorData.find({sensorID: req.body.sensorID})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// add new SensorData
const store = (req, res, next) => {
    let sensorData = new SensorData({
        sensorID: req.body.sensorID,
        value: req.body.value
    })

    sensorData.save()
    .then(response => {
        res.json({
            message: 'SensorData Added Successfully!' 
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    showAll, showBySensorID, store
}
