import React, { Component } from "react";
import { blockParams } from "handlebars";
import { black } from "ansi-colors";

const byStyle = {
  color: "black",
  margin: "5px",
  fontSize: "10px"
};
const nameStyle = {
  color: "white",
  fontSize: "12px"
};

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
      <div className="search-bar">
        <div className="logo">H</div>
        <div className="logo-name">
          <div>Hacker News</div>
          <div>Search</div>
        </div>
        <form onSubmit={this.props.searchQuery}>
          {/* <label>Search Hacker New:</label> */}
          <input
            type="text"
            name="funny"
            value={this.state.value}
            onChange={this.handleOnChange}
          />
        </form>
        <span style={byStyle}>by</span>{" "}
        <span style={nameStyle}>
          <a href="https://danielkapper.com/" target="_blank">
            Daniel Kapper
          </a>
        </span>
      </div>
    );
  }
}
