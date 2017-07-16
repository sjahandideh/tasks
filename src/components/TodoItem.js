import React, {Component} from 'react';
// style
import '../assets/styles/TodoItem.css';

class TodoItem extends Component {
  render() {
    let isDone = this.props.completed;
    let taskText = this.props.text;

    let checkBtn, divClass;
    if (!isDone) {
      checkBtn = (
        <button type="button" className=" btn btn-success in-progress">
          ✔
        </button>
      );
    } else {
      divClass = 'completed';
    }

    return (
      <div className={ divClass + ' todo-item' }>
        {checkBtn}
        {taskText}
      </div>
    );
  }
}

export default TodoItem;
