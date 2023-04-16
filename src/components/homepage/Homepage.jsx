import React from 'react'
import './Homepage.css'

export default function Homepage({setLoginUser}) {
  return (
    <div className='home'>

        <div className=''>
              <h1>Home</h1>
        
        </div>
          <div>
          <div className="btn-logut" onClick={() => setLoginUser({})} >Logout</div>
          </div>  
    
    
    
    </div>
  )
}
