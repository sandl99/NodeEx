const Employee = require('../models/Employee')

// Show  the list of employees
const index = (req, res, next) => {
    Employee.find()
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

// show single employee
const show = (req, res, next) => {
    let _id = req.body._id
    Employee.findById(_id)
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

// add new employee
const store = (req, res, next) => {
    let employee = new Employee({
        _id: req.body._id,
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })

    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!' 
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// update an employee
const update = (req, res, next) => {
    let _id = req.body._id

    let updateData = {
        _id: req.body._id,
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age        
    }

    Employee.findByIdAndUpdate(_id, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Employee updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An erorr occured!'
        }) 
    })
}

// delete an employee
const destroy = (req, res, next) => {
    let _id = req.body._id
    Employee.findByIdAndRemove(_id)
    .then(() => {
        res.json({
            message: 'Employee delete successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}