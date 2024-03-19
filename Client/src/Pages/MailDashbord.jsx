import React, { useEffect, useState } from 'react'
import { FaUserSecret } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import Form from '../Components/Form';
import Axios from 'axios'
import { Link } from 'react-router-dom';


const MailDashbord = () => {

  const [emailData,setEmailData]=useState([]);
  const Logout=()=>{
    localStorage.removeItem('auth')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    window.location.href='/login'
  }

  const user=window.localStorage.getItem('user')

  useEffect(()=>{
    const fetchData=async()=>{
      //console.log(user)
      const responsed=await Axios.get("http://localhost:3000/get-email",{
        params:{
          from:user,
        }
      })
      //console.log(responsed);
      setEmailData(responsed.data)
    }
    fetchData()
  },[])









  return (
    <div className=' w-[100%] h-[100vh] bg-[#ebf4f5] text-white'>
      {/* //navigation bar  */}
      <div className=' bg-[#08203e] text-black w-full h-[60px] flex  justify-between px-4 items-center'>
        < div className=' mx-4 '>
          <h2 className=' text-white font-bold'>Manish kumar</h2>
        </div>
        <div>

        <button onClick={Logout}>logout</button>
        </div>
      </div>

          {/* //dashboard  */}

        <div className=' grid grid-cols-[350px,1fr]'>
          <div className=' col-span-1 w-[350px] h-[100vh] bg-[#243748]'>
            <div className=' py-3 shadow-[0px_5px_0px_0px_rgba(109,40,217)]'>
              <h2 className=' flex '> <span>{<FaUserSecret className=' mx-2 my-1 text-red-600 text-[20px]'/>}</span>{window.localStorage.getItem("user")}</h2>
            </div>
            <div>
              <div className=' px-4 font-bold my-3 w-full h-7 shadow-[inset_12px_-16px_45px_21px_#718096]'>
                <h2 className=' flex '>{<MdMarkEmailRead className=' my-1 mx-2 text-green-400'/>} Sent</h2>
              </div>
              <div className=' w-full h-[550px] overflow-y-auto '>
                  {/* dashboard component */}
              
                  
                {emailData.map((sent,index)=>(
                  <>
                  <Link to={`/sent-email/${sent._id}`}>
                  <div  className=' flex text-white bg-[#0e1c26] p-2 rounded-lg mb-4 cursor-pointer '>
                      
                    <div className={` w-[50px] h-[50px]  ${index%2==0 ? 'bg-green-300': 'bg-orange-600'} rounded-full mx-2 my-4 p-4`}>
                      <p className=' text-center '>{sent.from.charAt(0).toUpperCase()}</p>
                    </div>
                    <div>
                      <p>To:{sent.to}</p>
                      <p>subject: {sent.subject.split(' ').slice(0, 5).join(' ') + (sent.subject.split(' ').length > 10 ? '...' : '')}</p>
                      <p>{sent.text.split(' ').slice(0, 5).join(' ') + (sent.subject.split(' ').length > 10 ? '...' : '')}</p>
                      <p className=' font-bold '>Date: {new Date(sent.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
                    </div>
                    
                  </div>
                </Link>
                  </>
                  ))}
                
                
               

                {/* above email dashboard component */}
               
              </div>
            </div>
          </div>
         {/* email sending form section */}
          <div className=' bg-white'>
            <Form/>
          </div>

        </div>
    </div>
  )
}

export default MailDashbord