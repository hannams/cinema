const express = require('express');
const PORT = process.env.PORT || 5000;

const server = express();

server.listen(PORT, () => {
    console.log("Server has been started...");
});