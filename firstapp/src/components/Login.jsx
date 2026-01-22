import React, { useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  function handleLogin(e){
    e.preventDefault()
    //console.log(e)
    let newUser={email,password}
    console.log(newUser)
  
    setEmail("")
    setPassword("")
    
  }

  return (
    <div className='container mt-4'>
      <div className="row">
        <form onSubmit={handleLogin} className='col-12 col-md-6'>
          <h2>Login</h2>
          
             

            <div className='mb-3'>
              <label className="form-label">Email </label>
              <input type="email" className="form-control"
              name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label className="form-label">Password </label>
              <input type="password" className="form-control"
              name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            
            <div className='mb-3'>
              <button className='btn btn-outline-success btn-lg'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}


