import React, {Component} from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux';
// style
import '../assets/styles/NewItem.css';

class NewItem extends Component {
  constructor(props) {
    super(props);
  }

  add(e) {
    if (e.keyCode == 13) {
    }
  }

  render() {
    return (
      <div className="new-item">
        <input
          type="text"
          placeholder="New task"
          onKeyDown={e => this.add(e)}
        />
      </div>
    );
  }
}

export default NewItem;
