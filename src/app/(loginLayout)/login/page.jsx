"use client"
import React, { use, useState } from 'react'

import SignUp from '@/components/SignUp';
import SignIn from '@/components/SignIn';
function LoginPage() {
    const [active,setActive] = useState(false);
   
    // validate yup
    
   
  return (
    <div>
    <div className={`container ${active && "active"}`} id="container">
        <SignUp/>
        <SignIn/>
        <div className="toggle-container">
            <div className="toggle">
            <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="" id="login" onClick={() => setActive(false)}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button className="" id="register" onClick={() => setActive(true)}> Sign Up</button>
            </div>
            </div>
        </div>
       
    </div>
    
    </div>

  )
}

export default LoginPage