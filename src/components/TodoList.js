import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as TaskActions from '../actions/TaskActions';
// style
import '../assets/styles/TodoList.css';
// component
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const completed = this.props.completed;
    const items = this.props.tasks.map((item) => {
      return(
        <li>
          <TodoItem text={item.text} completed={item.completed} />
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
    // You can now say this.props.books
    tasks: state.tasks
  }
};

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
