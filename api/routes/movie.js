const getMovies = (server, db) => {
    server.get('/movies', (req, res) => {
        let sql = "SELECT * FROM cinema.movies";
        db.query(sql, (err, result) => {
            if(err) console.log(err);
            console.log(result)
            res
                .status(200)
                .send(result);
        })
    });
};

module.exports = getMovies;