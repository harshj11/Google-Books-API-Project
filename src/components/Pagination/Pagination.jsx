import "./pagination.css";

const Pagination = (props) => {
    const{cardsPerPage, totalCards, paginate, currentPageNumber} = props;
    
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div className="pagination-container">
            {
                pageNumbers.map(pageNumber => {
                    return (
                        <button 
                            onClick={() => {
                                        paginate(pageNumber);
                                        window.scrollTo(0, 0)
                                    }} 
                            className={pageNumber === currentPageNumber ? "page-button active" : "page-button"}
                        >{pageNumber}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination;