import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  let token = localStorage.getItem("token")
  console.log(token)
  return (
    <header className='w-full bg-blue-700 flex justify-between py-5 px-10'>
        <div className='text-white font-semibold text-2xl'>
            <h1>Logo</h1>
        </div>
        <div>
          {token ?
          <button 
            className='bg-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200 cursor-pointer'
            onClick={
                ()=>{
                  localStorage.removeItem("token")
                  navigate("/")
                }
            } 
          >
            Logout
          </button> 
          :
          <div className='space-x-2'>
            <button className='bg-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200 cursor-pointer'
              onClick={
                  ()=>{
                    navigate("/")
                  }
              } 
            >
              Login
            </button>

            <button className='bg-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200 cursor-pointer'
              onClick={
                    ()=>{
                      navigate("/register")
                    }
              } 
            >
              Signup
            </button>
          </div>
 
          }
           
        </div>
    </header>
  )
 
}

export default Header;
