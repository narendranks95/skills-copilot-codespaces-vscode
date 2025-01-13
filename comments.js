// create web server
// get all comments
// add a new comment
// delete a comment
// update a comment

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

