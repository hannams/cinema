const db = require('./database/index');
const server = require('./server/index');
const PORT = process.env.PORT || 5000;

db.connect(err => {
    if (err) throw new Error(err);
    console.log("Database connected...")
});


server.listen(PORT, () => {
    console.log("Server has been started...");
});
