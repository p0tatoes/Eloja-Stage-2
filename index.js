// Import Express.js module
const express = require("express");

// Fields for hostname and port
const HOST = "127.0.0.1";
const PORT = 3000;

// Init express app
const app = express();

// Favourite programming language
const favLang = "Javascript";

// Home route (Shows cat)
app.get("/", (request, response) => {
    response.send(
        "Blank page; proceed to http://localhost:3000/programming-language"
    );
});

// Shows favorite programming language in a webpage
app.get("/programming-language", (request, response) => {
    response.send(favLang);
});

// Just logs to console when the app is started
app.listen(PORT, HOST, () =>
    console.log(`NodeJS app running on ${HOST}:${PORT}`)
);
