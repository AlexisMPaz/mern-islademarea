const ProductsPaginate = ({ paginate, onPageChange }) => {
    const { totalPages, page, prevPage, nextPage } = paginate;
  
    const handlePrevPage = () => {
      onPageChange(prevPage);
    };
  
    const handleNextPage = () => {
      onPageChange(nextPage);
    };
  
    return (
      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="Pagination">
          <ul className="pagination">
            {prevPage && (
              <li className="page-item">
                <button className="btn link" onClick={handlePrevPage}>
                  Anterior
                </button>
              </li>
            )}
  
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <li
                  key={pageNumber}
                  className={`${pageNumber === page ? ' active' : ''}`}
                >
                  <button className="btn link" onClick={() => onPageChange(pageNumber)}>
                    {pageNumber}
                  </button>
                </li>
              )
            )}
  
            {nextPage && (
              <li className="page-item">
                <button className="btn link" onClick={handleNextPage}>
                  Siguiente
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  };
  
  export default ProductsPaginate;