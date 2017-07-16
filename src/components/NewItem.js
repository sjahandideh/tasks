import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as TaskActions from '../actions/TaskActions';
// style
import '../assets/styles/NewItem.css';

class NewItem extends Component {
  constructor(props) {
    super(props);
  }

  create(e) {
    if (e.keyCode == 13) {
      this.props.createTask({
        text: e.target.value,
        completed: false
      });

      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="new-item">
        <input
          type="text"
          placeholder="New task"
          onKeyDown={e => this.create(e)}
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
