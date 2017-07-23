/** API fetcher using fetch **/

const endpoint = 'http://localhost:3001';

class TaskApi {  
  static getAll() {
    let headers = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }

    return fetch('http://localhost:3001/tasks', headers).then(response => {
      debugger;
      return response.json();
    }).catch(error => {
      debugger;
      return error;
    });
  }
}

export default TaskApi; 
