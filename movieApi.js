const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rp = require('request-promise');

app.set('view engine', 'ejs');


app.get('/results', (req, res) => {
    rp('http://www.omdbapi.com/?s=star&apikey=thewdb')
        .then((body) => {
            let data = JSON.parse(body);
            res.render('results', { data: data });
            console.log(body);
        })
        .catch((err) => {
            console.log(err);
        })
});



app.listen(PORT, () => {
    console.log("Movie App is listening on PORT:", PORT);

});