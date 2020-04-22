import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);

  const queryDB = useCallback(
    (event) => {
      event.preventDefault();
      axios.get(`/events?q=${searchTerm}`)
        .then((response) => {
          setResults(response.data);
        })
    }
  );
  
  return (
    <div>
      <Title />
      <SearchForm setSearchTerm={setSearchTerm} queryDB={queryDB} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;