import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TaskActions from '../actions/task-actions';
// style
import logo from '../assets/img/logo.svg';
import '../assets/styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';
// components
import TagsListNav from './nav/tags-list-nav';
import TaskList from './task/task-list';
import NewTask from './task/new-task';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.updateTasksAsync(nextProps.tasks);
  }

  _match(task, tags) {
    return task.tags.every(task => {
      return tags.includes(task);
    });
  }

  /* tasks is an Array of tasks
   * filters is an Array of filters. e.g. ['completed', 'home']
   * Note:
   *   completed and in-progress are saved as tags too!
  */
  _filterTasks(tasks, tags) {
    return tasks.filter(task =>
      this._match(task, tags)
    );
  }

  render() {
    let category = this.props.match.params.category;
    let inProgressTasks = this._filterTasks(this.props.tasks, ['in-progress', category]);
    let completedTasks = this._filterTasks(this.props.tasks, ['completed', category]);

    return (
      <div className="App container">
        <div className="App-body col-sm-offset-1 col-sm-7">
          <div className="App-header">
            <h2>My TODOs</h2>
          </div>
          <NewTask tag={category} />

          <div className='list'>
            <h4>Doing ...</h4>
            <TaskList tasks={inProgressTasks} tags={'in-progress,'+category} />
          </div>

          <div className='list'>
            <h4>Done!</h4>
            <TaskList tasks={completedTasks} tags={'completed,'+category}  />
          </div>
        </div>

        <TagsListNav active={category} />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks
  };
};

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    updateTasksAsync: tasks => dispatch(TaskActions.updateTasksAsync(tasks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
