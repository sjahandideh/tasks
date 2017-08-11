/** API fetcher using axios **/

import axios from 'axios';
require('dotenv').config();

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  headers: {}
});

class TaskApi {  
  static getAll() {
    return instance.get('/tasks.json').
      then(function(response) {
        let tasks = response.data.data.tasks;
        return tasks;
      })
      .catch(function(error) {
        return error;
      });
  }

  static updateAll(tasks) {
    if (!Array.isArray(tasks)) { return };

    return instance.post('/tasks.json', tasks).
      then(function(response) {
        let tasks = response.data.data.tasks;
        return tasks;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default TaskApi; 
