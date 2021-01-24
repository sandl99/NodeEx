// // ./src/index.js

// // importing the dependencies
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const auth = require('./controllers/auth.controller')

// // defining the Express app
// const app = express();

// // defining an array to work as the database (temporary solution)
// const ads = [
//   {title: 'Hello, world (again)!'}
// ];

// // adding Helmet to enhance your API's security
// app.use(helmet());

// // using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());

// // enabling CORS for all requests
// app.use(cors());

// // adding morgan to log HTTP requests
// app.use(morgan('combined'));

// app.use(auth.s)
// // replace the endpoint responsible for the GET requests
// app.get('/', async (req, res) => {
//     res.send(await getAds());
//   });
  
// app.post('/', async (req, res) => {
//   const newAd = req.body;
  
//   res.send({ message: 'New ad inserted.' });
// });	

// app.post('/signin', (req, res) => {
//     const newAd = req.body;
//     await insertAd(newAd);
//     res.send({ message: 'New ad inserted.' });
//   });	

// // endpoint to delete an ad
// app.delete('/:id', async (req, res) => {
//   await deleteAd(req.params.id);
//   res.send({ message: 'Ad removed.' });
// });

// // endpoint to update an ad
// app.put('/:id', async (req, res) => {
//   const updatedAd = req.body;
//   await updateAd(req.params.id, updatedAd);
//   res.send({ message: 'Ad updated.' });
// });
  
// // start the in-memory MongoDB instance
// startDatabase().then(async () => {
//     await insertAd({title: 'Hello, now from the in-memory database!'});

//     // start the server
//     app.listen(3000, async () => {
//         console.log('listening on port 3000');
//     });
// });

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var compress = require("compression");
var cors = require("cors");
var helmet = require("helmet");
var config = require("./config/config");
var mongoose = require("mongoose");

// // modules for server side rendering
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import MainRouter from './../client/MainRouter'
// import StaticRouter from 'react-router-dom/StaticRouter'
// import { SheetsRegistry } from 'react-jss/lib/jss'
// import JssProvider from 'react-jss/lib/JssProvider'
// import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
// import { indigo, pink } from '@material-ui/core/colors'
// //end

// var indexRouter = require("./routes/index.routes");
// var usersRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
// const shopRouter = require("./routes/shop.routes");
// const productRoutes = require("./routes/product.routes");
// const orderRoutes = require("./routes/order.routes");


const mongoUrl = config.config.mongoUri;

mongoose.connect(
  mongoUrl,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to IoTDB...");
  }
);

var app = express();  

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/shops/", shopRouter);
// app.use("/api/v1/products/", productRoutes);
// app.use('/api/v1/orders', orderRoutes);

 
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      res.status(401).json({ error: err.name + ": " + err.message });
    }
  });
  
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  
  module.exports = app;
  