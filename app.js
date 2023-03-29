// bring in the .env variables
require('dotenv').config();
TENOR_API_KEY = process.env.TENOR_API_KEY;

const express = require('express');

const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const Tenor = require("tenorjs").client({
    "Key": TENOR_API_KEY, // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", "notsafe"
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

// Routes
app.get('/', (req, res) => {
    term = ""
    if (req.query.term) {
        term = req.query.term;
        }
    Tenor.Search.Query(term, "10")
    .then(response => {
        const gifs = response;
        res.render('home', {gifs})
      }).catch(console.error);
    });

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', {name});
    });

// Start Server
app.listen(3000, () => {
    console.log('Gif Search listening on port 3000');
    });
