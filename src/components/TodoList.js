import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as TaskActions from '../actions/TaskActions';
// style
import '../assets/styles/TodoList.css';
// component
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  handleTaskClick(task) {
    this.props.completeTask(task);
  }

  render() {
    let tasks;

    if (this.props.type === 'in-progress') {
      tasks = this.props.inProgress;
    } else {
      tasks = this.props.completed;
    }

    const items = tasks.map(item => {
      return (
        <li>
          <TodoItem
            text={item.text}
            completed={item.completed}
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

const filterTasks = (tasks, completedFilter) => {
  return tasks.filter(task => {
    return task.completed == completedFilter;
  });
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    completed: filterTasks(state.tasks, true),
    inProgress: filterTasks(state.tasks, false)
  };
};

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    completeTask: taskId => dispatch(TaskActions.completeTask(taskId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
