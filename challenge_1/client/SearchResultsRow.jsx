import React from 'react';

const SearchResultsRow = ({ event }) => {
  // Refactor messy data into organized categories
  let year = event.date;
  if (event.date.indexOf('/') >= 0) {
    year = year.slice(0, event.date.indexOf('/'));
  }
  if (year[0] === '-') {
    year = year.slice(1) + ' B.C.';
  }

  return (
  <tr>
    <td>{year}</td>
    <td>{event.description}</td>
    <td>{event.category1}</td>
    <td>{event.category2}</td>
  </tr>
  )
};

export default SearchResultsRow;