import React, { Component } from "react";

export default class SortingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sortingBackGround">
        <form className="sortingForm">
          <div>
            Search
            <select>
              <option>ALL</option>
              <option>Stories</option>
              <option>Comments</option>
            </select>
          </div>
          <div>
            by
            <select>
              <option>Popularly</option>
              <option>Date</option>
            </select>
          </div>

          <div>
            for
            <select>
              <option>All Time</option>
              <option>Last 24h</option>
              <option>Past Week</option>
              <option>Past Month</option>
              <option>Pass Year</option>
              <option>Custom Range</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
