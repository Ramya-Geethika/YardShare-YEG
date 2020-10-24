const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const { getGrowers, addNewGrower, getLandholders, addNewLandholder } = require('./helpers/dbHelpers')(db);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/growers', (req, res) => {
  getGrowers()
    .then((growers) => res.json(growers))
    .catch((err) => res.json({ err }));
});

app.get('/landholders', (req, res) => {
  getLandholders()
    .then((landholders) => res.json(landholders))
    .catch((err) => res.json({ err }));
});

app.post('/growers', (req, res) => {
  const grower = req.body;
  addNewGrower(grower)
    .then(grower => res.json(grower))
    .catch((err) => res.json({ err }));
});

app.post('/landholders', (req, res) => {
  const landholder = req.body;
  addNewLandholder(landholder)
    .then(landholder => res.json(landholder))
    .catch((err) => res.json({ err }));
});

module.exports = app;