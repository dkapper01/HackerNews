import React, { Component } from "react";
// import SearchBar from "./components/SearchBar";
import "./App.css";
import Toggle from "./Toggle";
import FetchApi from "./FetchApi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchApi />
      </div>
    );
  }
}

export default App;
