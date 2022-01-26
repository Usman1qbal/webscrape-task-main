import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setAuthToken from '../util/setAuthToken';

function Signup() {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState();
  const navigate = useNavigate()

  const submitHandler = async () => {
    try {
      let res = await axios.post("http://localhost:5000/api/user/register", {email, password}) 
      console.log(res.data.token)
      if(res?.data?.token){
        localStorage.setItem("token", res.data.token)
        setAuthToken(res?.data?.token)
        navigate("/home")

      }
    }
    catch(err){
      console.log(err?.response?.data?.errors)
    }

  }
  return (
    <div className="bg-blue-200 flex h-screen">
      <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <h1 className="font-bold text-2xl my-10 text-white"> Signup </h1>
          <div className="mt-2 flex flex-col lg:w-1/2 w-8/12">
              <div className="flex flex-wrap  w-full relative h-15 bg-white items-center rounded mb-6 pr-10">
                <input
                  type="text"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                  className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
            
                <input
                  type="password"
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                  className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                  placeholder="Password"
                />
              </div>
              <button
              onClick={submitHandler}
              className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
              >
                Signup
            </button>
            </div>
          </div>
      </div>
  )
}

export default Signup;
