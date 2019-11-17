import React from 'react';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { fetchSearchResults } from './api/search';
import './App.css';

class App extends React.Component {
// Usually there would be some sort of redux like state management,
// but it seems a bit overkill for just manaing a couple of things
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.eventDebounce = this.eventDebounce.bind(this);
    this.state = {
      searchResults: [],
      searchQuery: '',
      eventDebounceTimout: 250,
    };
  }

  eventDebounce(fn, time) {
    let timeout;

    return (e) => {
      e.preventDefault();
      const functionCall = () => fn.apply(this, e);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }

  search() {
    const { searchQuery } = this.state;

    fetchSearchResults(searchQuery)
      .then((data) => {
        this.setState({ searchResults: data });
      }).catch(() => {
        this.setState({ searchResults: [] }); // On error we could have a toast or something
      });
  }

  updateQuery(e) {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { searchResults, eventDebounceTimout } = this.state;
    const debouncedSearch = this.eventDebounce(this.search, eventDebounceTimout);

    return (
      <div className="App">
        <header className="App-header">
          <img
            className="App-logo"
            src="https://www.tiqets.com/static/assets/webpack/logo/logo-white-medium.0c98d94780.png"
            alt="Tiqets.com"
          />
        </header>
        <main className="App-main">
          <Search handleSearch={debouncedSearch} updateQuery={this.updateQuery} />
          <SearchResults searchResults={searchResults} />
        </main>
      </div>
    );
  }
}

export default App;
