const express    = require('express')
const mongoose   = require('mongoose')
const morgan     = require('morgan')
const bodyParset = require('body-parser')
const bodyParser = require('body-parser')

// const EmployeeRoute = require('./routes/employee')
const UserRoute = require('./routes/user')
const DeviceRoute = require('./routes/device')
const SensorRoute = require('./routes/sensor')
const SensorDataRoute = require('./routes/sensordata')
mongoose.connect('mongodb://localhost:27017/IotDB', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


app.use('/api/user', UserRoute)
app.use('/api/device', DeviceRoute)
app.use('/api/sensor', SensorRoute)
app.use('/api/sensordata', SensorDataRoute)
 