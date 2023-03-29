const express = require('express');

const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.render('home');
    console.log(req.query)
    });

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', {name});
    });

// Start Server
app.listen(3000, () => {
    console.log('Gif Search listening on port 3000');
    });
