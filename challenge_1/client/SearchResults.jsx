import React from 'react';
import SearchResultsRow from './SearchResultsRow.jsx';

const SearchResults = ({ results }) => {
  if (results) {
    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Lang</th>
          <th>Category1</th>
          <th>Category2</th>
          <th>Granularity</th>
        </tr>
        {results.map((event) => (
          <SearchResultsRow event={event} />
        ))}
      </table>
    );
  } else {
    return null;
  }
};

export default SearchResults;