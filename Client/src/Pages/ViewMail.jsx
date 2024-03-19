import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const ViewMail = () => {
    const mailId=useParams()
    const [mailData,setMailData]=useState({});

    useEffect(()=>{
        const getData=async()=>{
            const data=await Axios.get(`http://localhost:3000/mail/${mailId.id}`)
            //console.log(data.data)
            setMailData(data.data)

            //console.log(mailId.id)
        }
        getData()
    },[mailId.id])

    const navigate=useNavigate()

    const getBack=()=>{
        navigate(-1)
    }
  return (
    <div className=' bg-[#0e1c26] w-full h-[100vh] p-28'>
        {Object.keys(mailData).length>0?<div className=' '>
            <div className=' flex'>
            <div className=' text-white bg-green-500 w-[50px] h-[50px] rounded-full '>
                <p className=' font-bold text-center py-3'>{mailData.from.charAt(0).toUpperCase()}</p>
            </div>
            <div className=' text-white mx-2 font-bold'>
                <h2 className='   '>From:{mailData.from}</h2>
                <p >To:{mailData.to}</p>
                <p className=' font-bold '>Date: {new Date(mailData.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
            </div>
            </div>

            <div className=' text-white mx-20 mt-8 w-full'>
                <p>{mailData.text}</p>
            </div>
        </div>:<p>loading</p>}

        <div className=' relative -bottom-56'>
            <button onClick={ getBack}>Get Back</button>
        </div>
    </div>
  )
}

export default ViewMail