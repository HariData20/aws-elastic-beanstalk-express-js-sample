const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!I am from Java Script Not console program.I am testing my final pipelibe updates will be pushed'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
