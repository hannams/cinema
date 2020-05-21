const express = require('express');
const db = require('./../database/index');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Screenings were fetched"
    })
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        message: "New screening was posted"
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        message: "Fetch screening by id",
        id
    })
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        message: "Updated screening",
        id
    })
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        message: "Screening deleted",
        id
    })
});

router.put('/:id/closed', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        message: "Changed status to closed",
        id
    })
});

router.put('/:id/open', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        message: "Changed status to open",
        id
    })
});

 // остался энд поинт брони


module.exports = router;