import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
const Home = () => {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [cnfpassword,setCnfPass]=useState();
    const [dob,setDob]=useState();

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        // Dynamically set the state based on the input
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'cnfpassword') {
            setCnfPass(value);
        } else if (name === 'dob') {
            setDob(value);
        }
    };
    
    const data={
        name:name,
        email:email,
        password:password,
        cnfpassword:cnfpassword,
        dob:dob
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await Axios.post('http://localhost:3000/register',data)
        .then(res=>{
            console.log(res) 
            alert("Registration Successful")
            window.location.href= "/login"
        })
        .catch(err=>{
            console.log(err)
            alert("Error in Registration")
        })
    }

    return (
        <div className='  w-[100%] m-h-[100vh] px-5 '>
                
            <div class="  sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5  ">
                <h1 className=' bg-gradient-to-tr from-pink-400 to-indigo-600 bg-clip-text text-transparent text-center'>welcome!</h1>
                <h2 className=' text-center font-bold'><span className=' text-orange-500'>Mail</span> Sender</h2>

                <form class="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label for="name" class="block text-sm font-medium leading-6 text-balance">Full Name</label>
                        <div class="mt-2">
                            <input id="name" value={name} name="name" type="name" autocomplete="name" required onChange={handleOnchange} class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black font-bold shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div>
                        <label for="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required onChange={handleOnchange} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black font-bold shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div>
                        <label for="dob" className="block text-sm font-medium leading-6 text-balance">Date of Birth</label>
                        <div className="mt-2">
                            <input id="dob" name="dob" type="date"  required onChange={handleOnchange} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black font-bold shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                        <label for="password" className="block text-sm font-medium leading-6 text-balance">Password</label>
                        <div className="mt-2"/>
                            
                            <input id="password" name="password" type="password" autoComplete="current-password" required onChange={handleOnchange} className="block w-full rounded-md border-0 bg-white/5 font-bold py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                        <label for="cnfpassword" className="block text-sm font-medium leading-6 text-balance"> Confirm Password</label>
                        <div className="mt-2"/>
                            <input id="cnfpassword" name="cnfpassword" type="password" autoComplete="current-password" required onChange={handleOnchange} className="block w-full rounded-md border-0 bg-white/5 font-bold py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                
                        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
                    
                </form>

                <p class="mt-10 text-center text-sm text-black">
                    Already Have account?
                    <Link to='/login' class="font-semibold leading-6 text-red-500 hover:text-red-400">Sign In</Link>

                </p>
            </div>
        </div>

    )
}

export default Home