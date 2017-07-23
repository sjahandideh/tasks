// a simple todo-list app server using Express
const APP_ENDPOINT = 'http://localhost:3000';

const express = require('express');
const app = express();
const port = 3001;
const taskItems = [];

var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get response data from a POST
var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({extended: true});
app.use(json_body_parser);
app.use(urlencoded_body_parser);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (request, response) => {
  console.log('items: ', taskItems);
  response.json({
    data: {tasks: taskItems},
  });
});

app.get('/tasks', (request, response) => {
  console.log('items: ', taskItems);
  response.json({
    status: 200,
    data: {tasks: taskItems},
  });
});

app.post('/tasks', (req, res) => {
  let task = req.body;

  taskItems.push({
    id: taskItems.length,
    text: task.text,
    tags: task.tags || [],
  });

  console.log('items: ', taskItems);
  res.send({
    data: {tasks: taskItems},
  });
});

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
