import React, {Component} from 'react';
// style
import './TodoItem.css';

class DoneTask extends Component {
  render() {
    return (
      <div className='todo-item completed'}>
        <button type='button' className='btn btn-success'>
          ✔
        </button>
        {this.props.text}
      </div>
    );
  }
}

export default DoneTask;
