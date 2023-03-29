const express = require('express');

const app = express();

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello Dingleberry');
    });

// Start Server

app.listen(3000, () => {
    console.log('Gif Search listening on port 3000');
    });
