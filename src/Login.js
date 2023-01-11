import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })


    const handleClick =async () => {
        let result = await fetch('http://localhost:7000/login', {
            method: "post",
            body: JSON.stringify({ email:email,password:password}),
            headers: {
                "Content-Type":"application/json"
            }
           
        })
        result =await result.json();
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/');
        } else {
            alert("Please enter Details")
       }
    }
  return (
      <div>
            <h2 className='register-header'>Login</h2>
          <div className='register-box'>
           <input className='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Eamil"></input>
          <input className='inputBox' value={password} type="text" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}></input>
          <button className='appButton' onClick={handleClick} type='Button'>Log In</button>  
    </div>
      </div>
  )
}

export default Login