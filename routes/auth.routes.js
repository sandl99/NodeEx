const express = require('express')
const authCtrl = require('../controllers/auth.controller')
const router = express.Router()

router.route('/signin')
    .post(authCtrl.signin)
router.route('/signout')
    .post(authCtrl.signout)
router.route('/test')
    .post(authCtrl.requireSignin, authCtrl.hasAuthorization)
    
module.exports = router;