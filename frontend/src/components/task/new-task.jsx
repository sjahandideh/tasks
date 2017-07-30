import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as TaskActions from '../../actions/task-actions';
// style
import '../../assets/styles/new-task.css';

class NewTask extends Component {
  constructor(props) {
    super(props);
  }

  create(e) {
    let category = this.props.tag;

    if (e.keyCode == 13) {
      let tags = [category, 'in-progress'];

      this.props.createTask({
        text: e.target.value,
        tags: tags,
      });

      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="new-item">
        <input
          className="new-task"
          type="text"
          placeholder="New task"
          onKeyDown={e => this.create(e)}
        />
      </div>
    );
  }
}

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(TaskActions.createTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(NewTask);
