import React, { Component } from 'react';
// style
import '../assets/styles/NewItem.css';

class NewItem extends Component {
  render() {
    return (
      <div className='new-item'>
        <input
          type='text'
          placeholder='New task ...'
          aria-describedby='basic-addon1'
        />
      </div>
    );
  }
}

export default NewItem;
