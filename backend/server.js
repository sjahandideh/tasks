'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.API_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheckMiddleware = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://{AUTH0_DOMAIN}/.well-known/jwks.json"
    }),
    audience: '{AUTH0_ID}',
    issuer: '{AUTH0_DOMAIN}',
    algorithms: ['RS256']
});

/** TASK **/
var taskItems = [];

app.get('/tasks.json', authCheckMiddleware, (request, response) => {
  console.log('loading tasks: ', taskItems);
  response.json({
    status: 200,
    data: {tasks: taskItems}
  });
});

// updating all tasks
app.post('/tasks.json', authCheckMiddleware, (req, res) => {
  let tasks = req.body;
  console.log('updating tasks: ', tasks);

  taskItems = tasks;
  //  taskItems.push({
  //    id: taskItems.length,
  //    text: task.text,
  //    tags: task.tags || [],
  //  });

  console.log('items: ', taskItems);
  res.json({
    status: 200,
    data: {tasks: taskItems}
  });
});

/** TAG **/

var tagItems = [];

app.get('/tags.json', authCheckMiddleware, (request, response) => {
  console.log('loading tags: ', tagItems);
  response.json({
    status: 200,
    data: {tags: tagItems}
  });
});

// creating a tag
app.post('/tags.json', authCheckMiddleware, (req, res) => {
  let tag = req.body;
  tagItems.push(tag.text);

  res.json({
    status: 200,
    data: {tags: tagItems}
  });
});

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
