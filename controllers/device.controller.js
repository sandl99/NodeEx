const getDevice = (req, res) => {
    if (!res.locals.device) {
        res.status(404).json("Device not found")
    }
    else 
    {
        res.json(res.locals.device)
    }
    res.end()
}

const getDeviceByUserID = (req, res) => {
    if (!res.locals.device) {
        res.status(404).json("Device not found")
    } else {
        res.json(res.locals.device)
    }
}

const setStatus = (req, res) => {
    res.end()
}

module.exports = {getDevice, getDeviceByUserID, setStatus}