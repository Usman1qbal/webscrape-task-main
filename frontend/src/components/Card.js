import React, { useState } from 'react';
import Pagination from './Pagination';


function Card({data}) {
    console.log("data",data)
    const dataLimit = 12
    // const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function changePage(number) {
        const pageNumber = Number(number);
        setCurrentPage(pageNumber);
      }

      const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.images.slice(startIndex, endIndex);
      };

    if(data.length === 0 ){
        return (
            <div>
                <h1 className='text-yellow-800 text-4xl font-semibold'>
                    No Image found /
                </h1>
            </div>
        )
    }
    return (
        <div>
           
        <section className="my-5 px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {
                data  && data.images.length > 0 ?
                        getPaginatedData().map((item,index)=>{
                            return (
                                <img className="w-full h-64 object-cover" src={item.src} alt={item.src} key={index} />
                            )
                        })
                        :
                        <div>
                            <h1 className='text-yellow-800 text-4xl font-semibold'>
                                No Image found /
                            </h1>
                        </div>
    
                
            
            }
          
            
        </section>
        <Pagination rowsPerPage={dataLimit} totalRows={data.images.length} paginate={changePage} />
        </div>

    )
}

export default Card;
