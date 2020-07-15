import React from 'react';
import '../App.css';
import Results from '../components/results';
import SearchBar from '../components/searchbar';

function App() {
  return (
    <div className="App">
      <div className="header">
        {/* <h1>TVmaze</h1> */}
        <img className="logo" src="./tvm-header-logo.png"/>
        <SearchBar />
      </div>
      <Results />
    </div>
  );
}

export default App;
