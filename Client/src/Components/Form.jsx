import React, { useEffect, useState } from 'react'
import { LuSend } from "react-icons/lu";
import {useParams} from 'react-router-dom'
import Axios from 'axios'

const Form = () => {

    
    const [to ,setTo]=useState();
    const [subject,setSubject]=useState();
    const [text,setText]=useState();
    const [authPass,setAuthPass]=useState();

    const [isLoading,setIsLoading]=useState(false)
    
   const mailData={
    userId:useParams(),
    from:window.localStorage.getItem("user"),
    authPass:authPass,
    to:to,
    subject:subject,
    text:text,
   }

   const handleSubmit=async(e)=>{
    e.preventDefault();
    setIsLoading(true);
        try {
            
            //console.log(mailData)
            const response=await Axios.post("http://localhost:3000/send-email",mailData);
            alert(response.data)
            setText('')
            setAuthPass('')
             setSubject('')
             setTo('')
        } catch (error) {
            alert("failed to sent the mail")
        }finally{
            setIsLoading(false)
        }

   }
  return (
    <div className=' text-black'>
        <div className=' px-10'>
            <form onSubmit={handleSubmit} >
                <div className=' mb-4'>
                    <label className=' font-bold'>Password:</label>
                    <input type="password" name="authPass" id="" placeholder="enter your email password" onChange={(e)=>setAuthPass(e.target.value)} className=' w-full h-[40px] rounded-lg'/>
                </div>
                
                <div className=' mb-4'>
                    <label className=' font-bold'>TO:</label>
                    <input type="email" name="to" id="" placeholder="example@gmail.com" onChange={(e)=>setTo(e.target.value)} className=' w-full h-[40px] rounded-lg'/>
                </div>
                
                <div className=' mb-4'>
                    <label className=' font-bold' >Subject:</label>
                    <input type="text" name="subject" id="" placeholder="write subject " onChange={(e)=>setSubject(e.target.value)} className=' w-full h-[40px] rounded-lg'/>
                </div>
                <div className=' mb-4'>
                    <label className=' font-bold'>Compose email</label>
                    <textarea name="text" id="" cols="144" rows="10" placeholder='write your email here' onChange={(e)=>setText(e.target.value)} className=' rounded-lg'></textarea>
                </div>

                 {isLoading?<button className=' flex bg-green-500'> {<LuSend className=' mt-1 mx-2'/>} Sending...</button>:<button className=' flex bg-green-500'> {<LuSend className=' mt-1 mx-2'/>} Send Mail</button>}
            </form>
        </div>
    </div>
  )
}

export default Form