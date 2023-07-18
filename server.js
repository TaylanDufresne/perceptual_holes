'use strict';

// Load packages
const express = require('express');
const app = express();

// Connection variables
const PORT = 8080;
const HOST = '0.0.0.0';

/**
 * Set up redirect so that / uses html
 */
app.route('/1')
    .get((req, res, next) => {
        res.redirect('/index1.html');
    })

app.route('/2')
    .get((req, res, next) => {
        res.redirect('/index2.html');
    })

app.route('/3')
    .get((req, res, next) => {
        res.redirect('/index3.html');
    })

app.route('/4')
    .get((req, res, next) => {
        res.redirect('/index4.html');
    })

app.use('/', express.static('pages'));
app.use('/', express.static('src'));

app.listen(PORT, HOST);
console.log('Server up and running on port: ' + PORT);