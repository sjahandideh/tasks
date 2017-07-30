/** API fetcher using axios **/

import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3001';
const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  headers: {}
});

class TagApi {  
  static getAll() {
    return instance.get('/tags.json').
      then(function(response) {
        let tags = response.data.data.tags;
        return tags;
      })
      .catch(function(error) {
        return error;
      });
  }

  static create(tagText) {
    let tag = { text: tagText };

    return instance.post('/tags.json', tag).
      then(function(response) {
        let tags = response.data.data.tags;
        return tags;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default TagApi; 
