const Device = require('../models/Device')

// Show  the list of Devices
const showAll = (req, res, next) => {
    Device.find()
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

// show single Device
const showByID = (req, res, next) => {
    let _id = req.body._id
    Device.findById(_id)
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


// show Device by userID
const showByUserID = (req, res, next) => {
    Device.find({userID: req.body.userID})
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


// add new Device
const store = (req, res, next) => {
    let device = new Device({
        _id: req.body._id,
        userID: req.body.userID,
        type: req.body.type,
        status: req.body.status
    })

    device.save()
    .then(response => {
        res.json({
            message: 'Device Added Successfully!' 
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// update an Device
const updateByID = (req, res, next) => {
    let _id = req.body._id

    let updateData = {
        _id: req.body._id,
        userID: req.body.userID,
        type: req.body.type,
        status: req.body.status
    }

    Device.findByIdAndUpdate(_id, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Device updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An erorr occured!'
        }) 
    })
}

// delete an Device
const destroyByID = (req, res, next) => {
    let _id = req.body._id
    Device.findByIdAndRemove(_id)
    .then(() => {
        res.json({
            message: 'Device delete successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    showAll, showByID, showByUserID, store, updateByID, destroyByID
}
