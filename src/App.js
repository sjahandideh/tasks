import React, { Component } from 'react';
// style
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// components
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My TODOs</h2>
        </div>
        <p className="container">
          <TodoList />
        </p>
      </div>
    );
  }
}

export default App;
