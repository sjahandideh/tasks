/** API fetcher using axios **/

import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3001';
const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  headers: {}
});

class TaskApi {  
  static getAll() {
    return instance.get('/tasks').
      then(function(response) {
        let tasks = response.data.data.tasks;
        return tasks;
      })
      .catch(function(error) {
        return error;
      });
  }

  static updateAll(tasks) {
    return instance.post('/tasks', {tasks: tasks}).
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
