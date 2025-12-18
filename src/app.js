const express = require('express');
const path = require('path');
const birdsRouter = require('./routes/birdsRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/resources', express.static(path.join(__dirname, 'resources')));

app.use('/', birdsRouter);

module.exports = app;
