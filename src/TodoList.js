import React, {Component} from 'react';
// style
import './TodoList.css';
// component
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const completed = this.props.completed;
    const data = this.props.items;
    const items = data.map((item) => {
      return(
        <li>
          <TodoItem id={item.index} text={item.text} completed={item.done} />
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

export default TodoList;
