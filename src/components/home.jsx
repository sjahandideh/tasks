import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as TaskActions from '../actions/task-actions';
// style
import logo from '../assets/img/logo.svg';
import '../assets/styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';
// components
import TaskList from './task/task-list';
import NewTask from './task/new-task';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //    this.props.loadTasksAsync();
  }

  componentDidUpdate(nextProps, nextState) {
    this.props.updateTasksAsync(nextProps.tasks);
  }

  match(task, tags) {
    return task.tags.every(task => {
      return tags.includes(task);
    });
  }

  /* tasks is an Array of tasks
   * filters is an Array of filters. e.g. ['completed', 'home']
   * Note:
   *   completed and in-progress are saved as tags too!
  */
  filterTasks(tasks, tags) {
    return tasks.filter(task =>
      this.match(task, tags)
    );
  }

  render() {
    let category = this.props.match.params.category;
    let inProgressTasks = this.filterTasks(this.props.tasks, ['in-progress', category]);
    let completedTasks = this.filterTasks(this.props.tasks, ['completed', category]);

    return (
      <div className="App">
        <div className="App-header">
          <h2>My TODOs</h2>
        </div>
        <p className="App-body">
          <NewTask tag={category} />

          <div className='list'>
            <h4>Doing ...</h4>
            <TaskList tasks={inProgressTasks} tags={'in-progress,'+category} />
          </div>

          <div className='list'>
            <h4>Done!</h4>
            <TaskList tasks={completedTasks} tags={'completed,'+category}  />
          </div>
        </p>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
  };
};

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadTasksAsync: () => dispatch(TaskActions.loadTasksAsync()),
    updateTasksAsync: tasks => dispatch(TaskActions.updateTasksAsync(tasks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
