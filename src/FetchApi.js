import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SortingBar from "./components/sortingComponents/SortingBar";
import ContentLoader, { Facebook } from "react-content-loader";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/User";
import moment from "moment";

const URL = `https://hn.algolia.com/api/v1/search?query=`;

const DEFAULT_QUERY = "react";
// const MyLoader = () => <ContentLoader />;

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
      return (
        <ContentLoader
          height={160}
          width={900}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="5" y="18" rx="3" ry="3" width="900" height="6.5" />
          <rect x="5" y="40.08" rx="3" ry="3" width="900" height="6.5" />
          <rect x="5" y="59" rx="3" ry="3" width="900" height="6.5" />
          <rect x="5" y="77.61" rx="3" ry="3" width="900" height="6.5" />
          <rect x="5" y="98" rx="3" ry="3" width="900" height="6.5" />
          <rect x="5" y="116" rx="3" ry="3" width="900" height="6.5" />
          <rect x="5" y="137" rx="3" ry="3" width="900" height="6.5" />
        </ContentLoader>
      );
    }
    return (
      <div>
        <SearchBar searchQuery={this.searchQuery} />
        <SortingBar />
        <ul className="news-list">
          {hits.map(hit => (
            <li key={hit.objectID}>
              <a href={hit.url} target="_blank">
                {hit.title}
              </a>
              <div className="list-info">
                <div className="list-detail">{hit.points}</div>
                <div className="list-detail">
                  {/* <User hereIsData={this.state.isLoading} /> */}
                  <a href={`http://hn.algolia.com/api/v1/users/${hit.author}`}>
                    {hit.author}
                  </a>
                </div>
                <div className="list-detail">
                  {moment(hit.created_at).fromNow()}
                </div>
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
