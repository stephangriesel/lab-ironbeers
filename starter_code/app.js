
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const beers   = require('./beers.json');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Partials
hbs.registerPartials(__dirname + "/views/partials");

// Index page
app.get('/', (req, res, next) => {
  res.render('index');
});

// Beers page
app.get('/beers', (req, res, next) => {
  res.render('beers', {beers: beers});
});

// Random password
app.get('/randombeers', (req, res, next) => {
  var randomBeer = beers[Math.floor(Math.random()*beers.length)];
  console.log(randomBeer);
  res.render('randombeers', {randomBeer});
});

app.listen(3020);

console.log("hello from beers,listening on 3020");





