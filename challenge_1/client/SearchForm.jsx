import React from 'react';

const SearchForm = ({ setSearchTerm, queryDB }) => (
  <form>
    <div>Enter a search term:</div>
    <input type="text" onChange={(event) => setSearchTerm(event.target.value)} />
    <button onClick={queryDB}>Submit</button>
  </form>
);

export default SearchForm;