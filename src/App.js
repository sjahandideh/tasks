import React, { Component } from 'react';
// style
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// components
import TodoList from './TodoList';
import NewItem from './NewItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My TODOs</h2>
        </div>
        <p className="App-body">
          <NewItem />

          <div className='list'>
            <h4>In Progress</h4>
            <TodoList type='incomplete' />
          </div>

          <div className='list'>
            <h4>Completed</h4>
            <TodoList type='completed' />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
