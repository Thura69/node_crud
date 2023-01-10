import React, { useState } from 'react'

function SignIn() {
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleClick = () => {
        console.log(name,email,password)
    }

  return (
      <div>
          <h1 className='register-header'>Register</h1>
          <div className='register-box'>
        <input className='inputBox' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name'></input>
          <input className='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Eamil"></input>
          <input className='inputBox' value={password} type="text" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}></input>
          <button className='appButton' onClick={handleClick} type='Button'>Sign Up</button>      
          </div>
    </div>
  )
}

export default SignIn