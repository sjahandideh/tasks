import React, { Component } from 'react';
// style
import logo from '../assets/img/logo.svg';
import '../assets/styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';
// components
import TaskList from './task/task-list';
import NewTask from './task/new-task';

class Home extends Component {
  render() {
    let category = this.props.match.params.category;

    return (
      <div className="App">
        <div className="App-header">
          <h2>My TODOs</h2>
        </div>
        <p className="App-body">
          <NewTask tag={category} />

          <div className='list'>
            <h4>Doing ...</h4>
            <TaskList tags={'in-progress,'+category} />
          </div>

          <div className='list'>
            <h4>Done!</h4>
            <TaskList tags={'completed,'+category}  />
          </div>
        </p>
      </div>
    );
  }
}

export default Home;
