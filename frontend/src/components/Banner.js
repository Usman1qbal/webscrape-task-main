import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';



function Banner() {
    const [input, setinput] = useState('');
    const [links, setlinks] = useState([]);
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate("/display", { state: links })
    }

    const addHandler = () => {
        if(input && input!==''){
            setlinks((prev)=>[...prev, input])
            setinput('')
        }
      
    }

    const removeHandler = (item) => {
        let newLinks = links.filter((link)=>link!==item)
        setlinks(newLinks)
    }

    return (
        <div>
            <div className=' flex bg-blue-400 h-screen'>
                <div className='my-24 mx-auto'>
                    <div className='border-blue-700 border-2 rounded-xl overflow-hidden'>
                        
                        <input 
                            type="text"
                            placeholder="ADD LINK TO SCRAP"
                            value={input} 
                            className=' px-4 py-4 w-[500px] outline-none placeholder:text-gray-500'
                            onChange={(e)=>{setinput(e.target.value)}} 
                        />
                        <button 
                            onClick={addHandler}
                            className='bg-blue-700 px-4 py-4 text-white hover:bg-blue-900'>
                            Add
                        </button>
                    </div>
                    {links?.map((item, index)=>{
                        return(
                            <div className='flex justify-between bg-blue-700 text-white py-2 px-2 mt-2 rounded-xl' key={index}>
                                <h1 className=''>{item}</h1>
                                <XIcon className='h-6 w-6 text-white cursor-pointer' onClick={()=>{removeHandler(item)}} />
                            </div>
                        )
                    })}
                    {links.length > 0 && 
                    <div className='flex justify-center'>
                        <button
                            onClick={()=>navigateHandler()}
                            className='bg-gray-700 rounded-xl mt-2 px-4 py-2 text-white hover:bg-gray-500'>Scrap data from the url</button>
                    </div> 
                    }

                
                </div>

            </div>

      </div>
   
    )
}

export default Banner;
