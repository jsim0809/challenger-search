import React from 'react';

const SearchForm = ({ setSearchTerm, handleSearchButtonClick }) => (
  <section className="section">
    <div className="container">
      <form>
        <div>Enter a search term:</div>
        <input type="text" onChange={(event) => setSearchTerm(event.target.value)} />
        <button onClick={handleSearchButtonClick}>Search</button>
      </form>
    </div>
  </section>
);

export default SearchForm;