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
    let tags = this.props.tags.split(',');
    let tasks = this.filterTasks(this.props.tasks, tags);

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

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
  };
};

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    completeTask: taskId => dispatch(TaskActions.completeTask(taskId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
