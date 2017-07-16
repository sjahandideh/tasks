import React, { Component } from 'react';

class InProgressTask extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default InProgressTask;
