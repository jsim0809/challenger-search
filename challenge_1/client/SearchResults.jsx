import React from 'react';
import ReactPaginate from 'react-paginate';
import SearchResultsRow from './SearchResultsRow.jsx';

const SearchResults = ({ results, totalPages, handlePageChangeClick }) => {
  if (results) {
    return (
      <section className="section">
        <div className="container">
          <nav className="pagination is-right">
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={totalPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
              onPageChange={handlePageChangeClick}
              containerClassName={'pagination-list'}
              previousLinkClassName={'pagination-previous'}
              nextLinkClassName={'pagination-next'}
              pageLinkClassName={'pagination-link'}
              activeLinkClassName={'pagination-link is-current'}
              breakLinkClassName={'pagination-ellipsis'}
              disabledClassName={'disabled'}
            />
          </nav>
        </div>
        <div className="container">
          <table className="table">
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
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default SearchResults;