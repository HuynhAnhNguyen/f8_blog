const path= require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
});

// Cach 1
// app.get('/', function(req, res) {
//     return res.send('Hello World!')
//   })

// Cach 2
// app.get('/', (req, res) => res.send('Hello World!'))


app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  // console.log(req.query.q);
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send("djedg");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})