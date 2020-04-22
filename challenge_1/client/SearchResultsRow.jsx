import React from 'react';

const SearchResultsRow = ({ event }) => (
  <tr>
    <td>{event.date}</td>
    <td>{event.description}</td>
    <td>{event.lang}</td>
    <td>{event.category1}</td>
    <td>{event.category2}</td>
    <td>{event.granularity}</td>
  </tr>
);

export default SearchResultsRow;