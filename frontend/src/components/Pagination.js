import React from 'react'


const Pagination = ({rowsPerPage,totalRows,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<Math.ceil(totalRows/rowsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <div className='flex justify-center px-6 '>
           
            <ul className="flex pl-0 list-none rounded my-2">
                {pageNumbers.map(number=>(
                    <li onClick={()=>paginate(number)} key={number} className="relative block py-5 px-5 leading-tight bg-blue-700 border text-white border-r-0 hover:bg-gray-900">
                        <h1 className="page-link"  >{number}</h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pagination;