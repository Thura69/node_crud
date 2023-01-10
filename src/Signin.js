import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn() {
 
    const [name, setName] = useState('');
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
        


        const userInfo = { name: name, email: email, password: password };
    

        let result = await fetch("http://localhost:7000/register", {
            method: "post",
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': "application/json"
            }
        });

        result = await result.json();

        localStorage.setItem('user', JSON.stringify(result));

        navigate("/");


    }

  return (
      <div>
          <h2 className='register-header'>Please Open Register</h2>
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