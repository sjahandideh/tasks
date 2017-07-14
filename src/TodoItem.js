import React, { Component } from 'react';
// style
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    let className = this.props.completed ? 'completed' : '';

    return (
      <div className={className + ' todo-item'}>
        {this.props.text}
      </div>
    );
  }
}

export default TodoItem;
