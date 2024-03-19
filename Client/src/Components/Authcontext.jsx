import React, { createContext, useState } from 'react'

export const Authcontext=createContext();

export const Authprovider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState();
    const [user,setUser]=useState();

    return (
        <Authcontext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser}}>
                 {children}
        </Authcontext.Provider>
    )
}