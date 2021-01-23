const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config');
const jwtSecret = "sdghjak82374ihury83yr3yr2u3h"
const User = require('../model/user')

const signin = (req, res) => {
    if (req.body.username == 'San' && req.body.password == 'admin') {
        const token = jwwt.sign(
            {
                _id : 1
            },
            jwtSecret
        );
        res.cookie ("t", token, {
            expire: new Date() + 999
        });
        return res.json({
            token,
            user: {_id: 1, username: 'San', password: 'admin'}
        });
    }
};

const signout = (req, res) => {
    res.clearCookie("t");
    return res.status("200").json({
      message: "signed out"
    });
  };
  const requireSignin = expressJwt({
    secret: jwtSecret,
    userProperty: "auth"
  });
  
  const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
      return res.status("403").json({
        error: "User is not authorized"
      });
    }
    next();
  };
  
  module.exports = { signin, signout, requireSignin, hasAuthorization };