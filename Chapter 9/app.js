const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const routes = require('./users');
const db = require('./db');
const dbSetup = new db();
dbSetup.setupDb();
const polyglot = require('./polyglot');
const mysql = require('./mysql');
const mongodb = require('./mongo');
new polyglot();
new mysql();
new mongodb();

app.use(bodyParser.json());
app.use(routes);

app.listen(4000,() => {
  console.log("Listening to port 4000");
});
