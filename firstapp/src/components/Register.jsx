import React, { useState } from 'react'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [mobile, setMobile] = useState()

  function handleRegister(e){
    e.preventDefault()
    //console.log(e)
    let newUser={name,email,mobile,password,address}
    console.log(newUser)
    setName("")
    setEmail("")
    setPassword("")
    setMobile("")
    setAddress("")
  }

  return (
    <div className='container mt-4'>
      <div className="row">
        <form onSubmit={handleRegister} className='col-12 col-md-6'>
          <h2>Register</h2>
          <div className='mb-3'>
              <label className="form-label">Name </label>
              <input type="text" className="form-control" 
              name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

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
              <label className="form-label">Mobile Number</label>
              <input type="text" className="form-control" 
              name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>

            <div className='mb-3'>
              <label className="form-label">Address </label>
              <input type="text" className="form-control" 
              name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <button className='btn btn-outline-success btn-lg'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}


