import React, { useState } from "react";

export const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState("");

  const setSearch = (term) => {
    setTerm(term);
    onSearchTermChange(term);
  };

  return (
    <div className="m-2">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">r</div>
        </div>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
          value={term}
          name="search"
          placeholder="wallpapers"
        />
      </div>
    </div>
  );
};
