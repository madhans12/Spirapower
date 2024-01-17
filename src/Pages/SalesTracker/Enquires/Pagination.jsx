import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import UserDataTable from './UserDataTable';
function PaginatedItems({ itemsPerPage, handleOpen, open, users }) {

    const [itemOffset, setItemOffset] = useState(0);


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(users.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % users.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <UserDataTable handleOpen={handleOpen} currentItems={currentItems} open={open}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination-container"
                pageClassName="pagination-page"
                activeClassName="pagination-active"
                breakClassName="pagination-break"
                previousClassName="pagination-previous"
                nextClassName="pagination-next"
            />
        </>
    );
}
export default PaginatedItems