import React, { Component } from "react";

const USER = `http://hn.algolia.com/api/v1/users`;

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.hereIsData);
    return <div>{/* <h1>User</h1> */}</div>;
  }
}
