import React, { Component } from 'react';

class SearchBar extends Component {
  // called automatically when a new instance
  // of the class is created
  constructor(props) {
    // parent method inherited from parent class
    super(props);

    this.state = { term: '' };
  }

  // input is now a controlled component
  // - value is now dictated by the state object
  // receive props onSearchTermChange function from index.js
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    // return <input onChange={this.onInputChange.bind(this)} />;
    // no need to bind?
    return (
      <div className="row">
        <div className="search-bar col-md-12">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            placeholder="Type in your search word here"
            className="form-control center-block"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
