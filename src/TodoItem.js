import React, {Component} from 'react';
// style
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    let divClass = this.props.completed ? 'completed' : '';
    let btnClass = this.props.completed ? '' : 'in-progress';

    return (
      <div className={divClass + ' todo-item'}>
        <button type='button' className={btnClass + ' btn btn-success'}>
          ✔
        </button>
        {this.props.text}
      </div>
    );
  }
}

export default TodoItem;
