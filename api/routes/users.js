const express = require('express');
const db = require('./../database/index');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get to /movies"
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Post to /movies"
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Get movie by id",
        id
    })
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Put movie to db",
        id
    })
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Delete movie from db",
        id
    })
});

module.exports = router;