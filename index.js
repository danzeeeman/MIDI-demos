require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const htmling = require('htmling');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', htmling.express(__dirname + '/views/'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 3001);