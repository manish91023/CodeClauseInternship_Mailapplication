import React, { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

import { useState } from 'react'
import {BrowserRouter,Navigate,Route,Routes, useNavigate} from 'react-router-dom'
import './App.css'
import '../src/Components/Home.css'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Error from './Pages/Error'
import VerifyEmail from './Pages/VerifyEmail'
import PrivateRoute from './Components/ProtectedRoute';
import MailDashbord from './Pages/MailDashbord';
import ViewMail from './Pages/ViewMail';

function App() {

  const isAuthanticated=window.localStorage.getItem('auth');
  
  


 
  return (
    <BrowserRouter>
    <div className=' home-background w-[100%] m-h[100vh]'>
      <Routes >
        <Route path='/login' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/verify-email' element={<VerifyEmail/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        <Route path='/sent-email/:id' element={<ViewMail/>}></Route>

        <Route
            path={`/dashboard/:userId`}
            element={
              isAuthanticated ? (
                <MailDashbord />
                
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
     
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
