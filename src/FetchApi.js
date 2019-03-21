import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

const URL = `https://hn.algolia.com/api/v1/search?query=`;
const DEFAULT_QUERY = "react";

export default class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.searchQuery = this.searchQuery.bind(this);

    this.state = {
      hits: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    fetch(URL + DEFAULT_QUERY)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => {
        console.log(data);
        return this.setState({ hits: data.hits, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  searchQuery(e) {
    e.preventDefault();
    console.log(e.target.elements.funny.value);

    this.setState({ isLoading: true });

    fetch(
      `https://hn.algolia.com/api/v1/search?query=${
        e.target.elements.funny.value
      }`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => {
        console.log(data);
        return this.setState({ hits: data.hits, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <SearchBar searchQuery={this.searchQuery} />
        <ul className="news-list">
          {hits.map(hit => (
            <li key={hit.objectID}>
              <a href={hit.url} target="_blank">
                {hit.title}
              </a>
              <div className="list-info">
                <div className="list-detail">{hit.points}</div>
                <div className="list-detail">{hit.author}</div>
                <div className="list-detail">{hit.created_at}</div>
                <div className="list-detail">Comment: {hit.num_comments}</div>
                <div className="list-detail">{hit.url}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
