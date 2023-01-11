import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AddProduct() {
     const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



    const handleClick =async () => {
      if (!name || !price || !category || !company) {
        setError(true);
        console.log("Enter Validation name")

      } else {
        let result = await fetch("http://localhost:7000/add-new", {
            method: "post",
            body: JSON.stringify({ name: name, price: price, category: category, company: company }),
            headers: {
                "Content-Type":"application/json"
            }
        })

        result = await result.json();
        setName(''); setPrice(''); setCategory(''); setCompany('');
        navigate('/')
     }
        


 }

  return (
    <div className='add-box'>
     
      <h2 className='register-header'>Add Products</h2>
       
      <div className='register-box-add'>
         {
          error && <p className='invalid-input'>Please Enter All Details</p>
        }
        <input className='inputBox' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name'></input>
       
          <input className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Price"></input>
              <input className='inputBox' value={category} type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)}></input>
               <input className='inputBox' value={company} type="text" placeholder="Enter Company" onChange={(e)=>setCompany(e.target.value)}></input>
          <button className='appButton' onClick={handleClick} type='Button'>Add</button>      
          </div>  
    </div>
  )
}

export default AddProduct