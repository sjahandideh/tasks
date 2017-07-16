import React, {Component} from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux';
// style
import '../assets/styles/NewItem.css';
// config
import * as TaskActions from '../actions/TaskActions';

class NewItem extends Component {
  constructor(props) {
    super(props);
  }

  add(e, text) {
    if (e.keyCode == 13) {
      this.props.createTask({
        text: text,
        completed: false
      });
    }
  }

  render() {
    let taskInput;

    return (
      <div className="new-item">
        <input
          type="text"
          placeholder="New task"
          onKeyDown={e => this.add(e, taskInput.value)}
          ref={node => taskInput = node}
        />
      </div>
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
    createTask: task => dispatch(TaskActions.createTask(task))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
