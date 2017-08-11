/** a simple todo-list app server using Express **/

require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = process.env.API_PORT;
var taskItems = [];
var tagItems = [];

app = _addHeaders(app, bodyParser);

/** API **/

/** TASK **/
app.get('/tasks.json', (request, response) => {
  console.log('loading tasks: ', taskItems);
  response.json({
    status: 200,
    data: {tasks: taskItems}
  });
});

// updating all tasks
app.post('/tasks.json', (req, res) => {
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
app.get('/tags.json', (request, response) => {
  console.log('loading tags: ', tagItems);
  response.json({
    status: 200,
    data: {tags: tagItems}
  });
});

// creating a tag
app.post('/tags.json', (req, res) => {
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

/** Utility functions **/

function _addHeaders(app, body_parser) {
  // configure app to use bodyParser()
  // this will let us get response data from a POST
  var json_body_parser = body_parser.json();
  var urlencoded_body_parser = body_parser.urlencoded({extended: true});
  app.use(json_body_parser);
  app.use(urlencoded_body_parser);
  app.use(function(req, res, next) {
    req.header('Content-type', 'application/json');
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

  return app;
}

