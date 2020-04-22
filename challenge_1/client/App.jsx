import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const queryDB = useCallback(
    (page) => {
      axios.get(`/events?q=${searchTerm}&_page=${page}`)
        .then((response) => {
          setResults(response.data);
          setTotalPages(Math.ceil(response.headers["x-total-count"] / 10));
        })
    }
  );

  const handleSearchButtonClick = useCallback(
    (event) => {
      event.preventDefault();
      queryDB(currentPage);
    }
  );

  const handlePageChangeClick = useCallback(
    (reactPaginatePage) => {
      // react-paginate is zero-indexed
      setCurrentPage(reactPaginatePage.selected + 1);
      queryDB(reactPaginatePage.selected + 1);
    }
  );

  return (
    <div>
      <Title />
      <SearchForm setSearchTerm={setSearchTerm} handleSearchButtonClick={handleSearchButtonClick} />
      <SearchResults results={results} totalPages={totalPages} handlePageChangeClick={handlePageChangeClick} />
    </div>
  );
}

export default App;