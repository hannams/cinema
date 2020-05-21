const express = require('express');
const db = require('./../database/index');
const router = express.Router();

router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM movies INNER JOIN images ON movies.image = images._id'
    db.query(sql, (err, result) => {
        if (err) throw new Error(err);
        console.log("Fetched all movies...")
        return res.status(200).send(result);
    })
});

router.post('/', (req, res, next) => {

    const sql = `INSERT INTO movies (name, nameRu, description, rentalStart, rentalEnd, image) VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(sql, [req.body.name, req.body.nameRu, req.body.description, req.body.rentalStart, req.body.rentalEnd, req.body.image], (err, result) => {
        if (err) return res.status(400).send("Bad input");
        return res.status(201).send({
            message: "Movie created"
        })

    })
});

router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    if (isNaN(id)) return res.status(400).send("Invalid ID");

    const sql = `SELECT * FROM movies WHERE _id=${id}`;
    db.query(sql, (err, result) => {
        console.log(result.lenght);
        console.log(result);
        if (err) { return res.status(500) }
        if (!result.lenght) { return res.status(404).send("Not Found") }

            return res.status(200).send(result[0]); 
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
    if (isNaN(id)) return res.status(400).send("Invalid ID");
    db.query(`DELETE FROM movies WHERE _id=?`, [id], (err, result) => {
        if (err) throw new Error(err);

        res.status(200).send("Movie deleted.")
    })
});

module.exports = router;