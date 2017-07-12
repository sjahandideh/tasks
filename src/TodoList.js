import React, { Component } from 'react';
// style
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list list-group">
        <li className="list-group-item">
          <div className="panel panel-default">
            <div className="panel-body">
              Basic panel example
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="panel panel-default">
            <div className="panel-body">
              Basic panel example
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
          </div>
        </li>
        <li className="list-group-item">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
          </div>
        </li>
      </ul>
    );
  }
}

export default TodoList;
