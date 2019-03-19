import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

const URL = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "react";

export default class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = this.searchTerm.bind(this);

    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch(URL + DEFAULT_QUERY)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return this.setState({ hits: data.hits });
      });
  }
  searchTerm(e) {
    e.preventDefault();
    console.log(e.target.elements.funny.value);
  }

  render() {
    const { hits } = this.state;
    return (
      <div>
        <SearchBar searchTerm={this.searchTerm} />
        <ul>
          {hits.map(hit => (
            <li className="news-list" key={hit.objectID}>
              <a href={hit.url} target="_blank">
                {hit.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
