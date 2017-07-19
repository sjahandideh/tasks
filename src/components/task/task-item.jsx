import React, {Component} from 'react';
// style
import '../../assets/styles/task-item.css';

class TaskItem extends Component {
  markAsDone(e) {
  }

  render() {
    let isDone = this.props.tags.includes('completed');
    let taskText = this.props.text;

    let checkBtn, divClass;
    if (!isDone) {
      checkBtn = (
        <button type="button" className=" btn btn-success in-progress" onClick={e => this.props.onClick(taskText)}>
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

export default TaskItem;
