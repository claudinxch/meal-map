import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div
      className={`flex items-center justify-between w-full ${
        props.className ? props.className : ""
      }`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="border rounded py-1 px-2 mr-2 w-full max-w-lg"
      />
      <button
        /*onClick={handleSearch}*/ className="bg-orange text-darkGray font-secondary font-normal rounded py-1 px-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
