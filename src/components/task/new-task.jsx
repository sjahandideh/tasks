import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as TaskActions from '../../actions/TaskActions';
// style
import '../../assets/styles/new-task.css';

class NewTask extends Component {
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

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    createTask: task => dispatch(TaskActions.createTask(task))
  }
};

export default connect(null, mapDispatchToProps)(NewTask);
