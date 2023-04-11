import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;