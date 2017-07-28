import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TagActions from '../../actions/tag-actions';

class TagsListNav extends Component {
  constructor(props) {
    super(props);
  }

  create(e) {
    if (e.keyCode == 13) {
      let tag = e.target.value;
      this.props.createTagAsync(tag);
      e.target.value = '';
      window.location.assign(tag);
    }
  }

  render() {
    let active = this.props.active;
    let tags = this.props.tags;

    return (
      <div className="App-body col-sm-offset-1 col-sm-2">
        <div className="list-group">
          <a href="/" className="list-group-item">Home</a>
          {tags.map((tag) => (
            <a href={tag} className={(tag == active ? 'active' : '') + " list-group-item"}>{tag}</a>
          ))}
          <div className="new-item">
            <input
              type="text"
              placeholder="New list"
              onKeyDown={e => this.create(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    tags: state.tags
  };
};

// Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    createTagAsync: tag => dispatch(TagActions.createTagAsync(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsListNav);
