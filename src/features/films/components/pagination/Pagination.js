import React from 'react';
import { IconContext } from "react-icons";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Style from "./Pagination.module.scss";

const Pagination = ({pageNumber, totalPages, handlePagination}) => {

    return(
        <>
            <nav className={`${ Style.container }`}>
                <ul className="pagination">
                    <IconContext.Provider value={{size: "20px"}}>
                        <li onClick={ () => handlePagination(1)} className="page-item mr-4">Premiere</li>
                        <li onClick={ () => handlePagination(pageNumber - 1)} className="page-item mr-4"> <MdChevronLeft /> </li>
                        <li className="page-item mr-4 text-secondary" style={{cursor: "default"}}> { pageNumber } </li>
                        <li onClick={ () => handlePagination(pageNumber + 1)} className="page-item mr-4"> <MdChevronRight /> </li>
                        <li onClick={ () => handlePagination(totalPages)} className="page-item disabled" >Derniere</li>
                    </IconContext.Provider>
                </ul>
            </nav>
        </>
    )
}

export default Pagination;