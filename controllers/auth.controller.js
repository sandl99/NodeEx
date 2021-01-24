const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config');
const jwtSecret = "sdghjak82374ihury83yr3yr2u3h"
const User = require('../models/user')

const signin = (req, res) => {
	User.find(
		{
			username: req.body.username
		}, 
	(err, users) => {
		console.log(users)
		if (err || !users) {
			res.status("401").json({
				error: "Incorrect username"
			})
			res.end()
		}
		let user = users[0]
		if (user.password != req.body.password) {
			res.status("401").json({
				error: "Incorrect password"
			})
			res.end()
		}
		const token = jwt.sign(
            {
                _id : user._id
            },
            jwtSecret
        );
        res.cookie ("cookie", token, {
            expire: new Date() + 999
		});
		console.log('abc')
        res.json({
            token,
            user: {_id: user._id, username: user.username, password: user.password}
        });
	});
};

const signout = (req, res) => {
    res.clearCookie("cookie");
    return res.status("200").json({
      message: "signed out"
    });
  };

const requireSignin = expressJwt({
	secret: jwtSecret,
	requestProperty: "auth",
	algorithms: ['HS256']
});
  
const hasAuthorization = (req, res, next) => {
	const authorized = req.user && req.auth && req.user._id == req.auth._id;
	if (!authorized) {
		return res.status("403").json({
		error: "User is not authorized"
		});
	}
	next();
};
  
module.exports = {signin, signout, requireSignin, hasAuthorization};