import React from 'react';
import "../styles/searchResults.css";

const searchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>
      } else {
        return (
            <>
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </>
        );
      }
    
};

export default searchResults;