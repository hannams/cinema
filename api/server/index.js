const express = require('express');
const morgan = require('morgan');
const moviesRoutes = require('./../routes/movie');
const screeningsRoutes = require('./../routes/screenings');

const server = express();


// additional middleware
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false}));
server.use(express.json())


// handling cors
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
})


//Routes which handle requests
server.use('/movies', moviesRoutes)
server.use('/screenings', screeningsRoutes);


// error handling
server.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

server.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        error: {
            message: 
                error.message
        }
    })
})

module.exports = server;
