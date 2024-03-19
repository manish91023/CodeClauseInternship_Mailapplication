import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

const Home = () => {
    const Navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [_,setCookies]=useCookies(['token'])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // This should be dynamically obtained from the server
        try {
            const response = await Axios.post('http://localhost:3000/login', { email, password })
             setCookies('token',response.data.token)
            localStorage.setItem('auth', response.data.auth);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('user',response.data.user)
            const token=jwtDecode(window.localStorage.getItem('token'))
            Navigate(`/dashboard/${token._id}`) 
            //console.log(token._id)
        } catch (error) {
            alert("An error occurred while submitting the form.");
            console.log(error);
        }
    };

    return (
        <div className='  w-[100%] m-h-[100vh] px-5 py-10'>
                
            <div className="  mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-4 rounded-lg">
                <h1 className=' bg-gradient-to-tr from-pink-400 to-indigo-600 bg-clip-text text-transparent text-center'>welcome!</h1>
                <h2 className=' text-center font-bold'><span className=' text-orange-500'>Mail</span> Sender</h2>

                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" onChange={(e)=>setEmail(e.target.value)} required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Password</label>
                            <div class="text-sm">
                                <a href="#" className="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" onChange={(e)=>setPassword(e.target.value)} required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-400">
                    Not a member?
                    <Link to='/signup' className="font-semibold leading-6 text-red-500 hover:text-red-400">Sign Up</Link>
                </p>
            </div>
        </div>

    )
}

export default Home