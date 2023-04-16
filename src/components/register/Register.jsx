import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

export default function Register() {


  const history = useHistory()

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


  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)){
        axios.post("http://localhost:9002/register", user)
        .then( res => {
            alert(res.data.message)
            history.push("/login")
        })
    } else {
        alert("invlid input")
    }
    
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
            <div className='button' onClick={register} >Register</div>
            <div>Or</div>
            <div className='button' onClick={() => history.push("/login")} >Login</div>
        
        </div>
    
    
    
    </div>
  )
}
