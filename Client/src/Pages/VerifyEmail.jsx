import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();


   useEffect(()=>{
    const emailToken=new  URLSearchParams(window.location.search).get('emailToken');
    
    const userVerification=async(emailToken)=>{
        setLoading(true)
        try {
          const data=await Axios.get(`http://localhost:3000/verify-email?emailToken=${emailToken}`,{emailToken})
          .then(res=>{
            alert("verified your email")
            console.log(res)
            navigate('/login')
          })
          .catch(err=>{
            console.log(err)
            alert("not verified some error occured")
          })
          console.log(data)
        } catch (error) {
          console.log(error)
          alert("error occured not verified")
        }finally{
          setLoading(false)
        }
       
      
    }
    userVerification(emailToken);
   },[])
  

  return (
    <div className=' bg-black w-full h-screen'>
        {loading?<h2 className='  text-white text-center pt-52 text-[30px] '>Verifying your email...</h2>:<h2 className=' text-white text-center pt-52 text-[30px]'>verified</h2>}
    </div>
  )
}

export default VerifyEmail