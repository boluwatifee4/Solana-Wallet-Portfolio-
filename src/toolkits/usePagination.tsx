import React from 'react'

type Props = {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
}
const UsePagination: React.FC<Props> = (props) => {
    const { itemsPerPage, totalItems, paginate } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination flex items-center justofy-center flex-row">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item m-2 text-sm px-2 p-1 ">
                        <a onClick={() => paginate(number)} className="page-link" href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsePagination