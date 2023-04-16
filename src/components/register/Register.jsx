import React, { useState } from 'react'
import "./Register.css"

export default function Register() {


  const [user,setUser]= useState({
    name: "" ,
    email: "" ,
    password: "" ,
    reEnterPassword: ""

  })

  const handleChange=(e)=>{
    
    const {name ,value} =e.target
    setUser({
      ...user,
      [name]:value 

    })

  }









  return (
    <div className='main-register'>
        <div className='register'>
        {console.log("User",user)}
            <h1>Register</h1>
            <input type="text" name='name'  value={user.name}  placeholder='Your Name' onChange={handleChange}  />
            <input type="text" name='email' value={user.email} placeholder='Your Email'onChange={handleChange}  />
            <input type="password"name='password'  value={user.password} placeholder='Your Password' onChange={handleChange} />
            <input type="password"name='reEnterPassword' value={user.reEnterPassword}  placeholder='Re-enter Password' onChange={handleChange} />
            <div className='button'>Register</div>
            <div>Or</div>
            <div className='button'>Login</div>
        
        </div>
    
    
    
    </div>
  )
}
