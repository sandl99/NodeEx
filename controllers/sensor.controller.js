
const getSensor = (req, res) => {
    if (!res.locals.sensor) {
        res.status(404).json("Sensor not found")
    } else {
        res.status(200).json(res.locals.sensor)
    }
}

const getSensorByUserID = (req, res) => {
    if (!res.locals.sensor) {
        res.status(404).json("Sensor not found")
    } else {
        res.status(200).json(res.locals.sensor)
    }
}

module.exports = {getSensor, getSensorByUserID}