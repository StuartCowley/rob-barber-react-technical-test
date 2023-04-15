import React, { useState } from 'react';
import '../styles/searchResults.css';

const SearchResults = ({ results }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (!results.length) {
    return <p className="no-results">No results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((image) => (
          <img
            key={image}
            className="card-image"
            src={image}
            alt="spaceImage"
            onClick={() => handleImageClick(image)}
          />
        ))}
        {selectedImage && (
          <div className="overlay" onClick={() => setSelectedImage(null)}>
            <img
              className="overlay-image"
              src={selectedImage}
              alt="spaceImage"
            />
          </div>
        )}
      </div>
    );
  }
};

export default SearchResults;
