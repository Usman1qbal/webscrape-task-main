import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import Video from './Video';

function Display() {
  const { state } = useLocation();
  console.log(state);
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [selectedOption, setSelectedOption] = useState('images');
  useEffect(() => {
      (async () => {
        if(state && state.length > 0){
          let res = await axios.post("http://localhost:5000/api/scrapeImg", {links:state})
          setloading(false)
          setdata(res.data)
          console.log(res)
        }
        setloading(false)
   
      })
      ()
  }, [state]);
  if(loading){
    return <div>Loading...</div> 
  }
  
  return (
    <>
  <div className="px-6 pt-6">
                <div className="">

                    <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border-gray-700 border-2">
                      <button  className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                      <input type="search" placeholder="search for images" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                      <div className="select">
                        <select name="" id=""       
                                value={selectedOption}
                                onChange={e => setSelectedOption(e.target.value)} 
                                className="text-sm outline-none focus:outline-none bg-transparent">
                          <option value="images" >Images</option>
                          <option value="videos" >Videos</option>
                        </select>

                      </div>
                    </div>
                  
                </div>
              </div>
              {
                selectedOption === 'images' ?
                <Card data={data} />:
                <Video data={data} />
              }
              
      
    </>
   
  )
}

export default Display;
