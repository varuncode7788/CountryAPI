import React from "react";

function SearchBar({ search, onSearch }) {
  return (
    <div>
      <input type="text" 
      placeholder="Search" 
      value={search} 
      onChange={onSearch} />
    </div>
  );
}

export default SearchBar;
