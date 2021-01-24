const SensorData = require('../../models/SensorData')

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
            error: 'An error occured!'
        })
    })
}

// show lastest SensorData by sensorID 
const showBySensorID = (req, res, next) => {
    SensorData.findOne(
        {sensorID: req.query.sensorID}, 
        { sort: { 'createAt' : 1 } })
    .then(response => {
        res.labels.data = response
    })
    .catch(error => {
        res.json({
            error: 'An error occured!'
        })
    })
}

// add new SensorData
const store = (req, res, next) => {
    let sensorData = new SensorData({
        sensorID: req.body.sensorID,
        value: req.body.value,
        createAt: new Date(req.body.createAt)
    })

    sensorData.save()
    .then(response => {
        res.json({
            message: 'SensorData Added Successfully!' 
        })
        next()
    })
    .catch(error => {
        res.json({
            error: 'An error occured!'
        })
    })
}

module.exports = {
    showAll, showBySensorID, store
}
