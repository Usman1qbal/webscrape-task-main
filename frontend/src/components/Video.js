import React, { useState } from 'react';

function Video({data}) {
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
                    No Video found /
                </h1>
            </div>
        )
    }
  return (
        <div>
            <section className="my-5 px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    data && data.videos.length > 0 ?
                            data.videos.map((item,index)=>{
                                return (
                                    <video className="w-full h-64 object-cover" src={item.src} key={index}></video>
                                
                                )
                            })
                            :
                            <div>
                                <h1 className='text-yellow-800 text-4xl font-semibold'>
                                    No Video found /
                                </h1>
                            </div>

                    
                
                }
                
            </section>
        </div>
   
  )
}

export default Video;
