import React, {Component} from 'react';
// style
import '../assets/styles/TodoList.css';
// component
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    }
  }

  render() {
    const completed = this.props.completed;
    const items = this.state.items.map((item) => {
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
