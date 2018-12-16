import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <SearchBar />
          <BusinessList />

        </React.Fragment>
    );
  }
}

export default App;
