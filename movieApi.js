const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rp = require('request-promise');
const request = require('request');

app.get('/results', (req, res) => {
    rp('http://www.omdbapi.com/?t=star&apikey=thewdb')
    .then((body) => {
        res.send(body);
        console.log(body);
        })
    .catch((err) => {
        console.log(err);
        })
});

app.listen(PORT, () => {
    console.log("Movie App is listening on PORT:", PORT);
    
});