import React, {Component} from 'react';
// style
import './TodoList.css';
// component
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <li>
          <TodoItem text="Book Venue" completed="false" />
        </li>
        <li>
          <TodoItem text="Order Cake" completed="false" />
        </li>
        <li>
          <TodoItem text="Invite Guests" completed="true" />
        </li>
      </ul>
    );
  }
}

export default TodoList;
