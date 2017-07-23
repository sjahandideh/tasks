import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as TaskActions from '../../actions/task-actions';
// style
import '../../assets/styles/task-list.css';
// component
import TaskItem from './task-item';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  handleTaskClick(task) {
    this.props.completeTask(task);
  }

  render() {
    let tags = this.props.tags.split(',');
    let tasks = this.props.tasks;

    const items = tasks.map(item => {
      return (
        <li>
          <TaskItem
            text={item.text}
            tags={item.tags}
            onClick={task => this.handleTaskClick(task)}
          />
        </li>
      );
    });

    return (
      <ul className="todo-list">
        {items}
      </ul>
    );
  }
}

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    completeTask: taskId => dispatch(TaskActions.completeTask(taskId))
  };
};

export default connect(null, mapDispatchToProps)(TaskList);
