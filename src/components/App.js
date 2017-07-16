import React, { Component } from 'react';
// style
import logo from '../assets/img/logo.svg';
import '../assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// components
import TodoList from './TodoList';
import NewItem from './NewItem';

class App extends Component {
  fakeList() {
    return {
      completed: [
        { index: 2, text: 'invite guests', done: true }
      ],
      inProgress: [
        { index: 1, text: 'book venue',    done: false },
        { index: 3, text: 'order cake',    done: false }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My TODOs</h2>
        </div>
        <p className="App-body">
          <NewItem />

          <div className='list'>
            <h4>Doing ...</h4>
            <TodoList type='in-progress' />
          </div>

          <div className='list'>
            <h4>Done!</h4>
            <TodoList type='completed'  />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
