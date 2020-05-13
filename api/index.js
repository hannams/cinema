const db = require('./database/index');
const server = require('./server/index');
const PORT = process.env.PORT || 5000;
const getMovies = require('./rest/movie/index');

db.connect(err => {
    if(err) console.log(err);
    console.log("Database connected...")
});

getMovies(server, db);

server.listen(PORT, () => {
    console.log("Server has been started...");
});
