const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sensorDataSchema = new Schema({
    sensorID: {
        type: Number
    },
    value: {
        type: Number
    }, 
    createAt: {
        type: Date
    }
}, {timestamps: false})

const SensorData = mongoose.model('SensorData', sensorDataSchema)
module.exports = SensorData
