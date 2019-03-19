import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    alert("test" + this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.searchTerm}>
          <label>Search Hacker New:</label>
          <input
            type="text"
            name="funny"
            value={this.state.value}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
