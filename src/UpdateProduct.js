import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';


function UpdateProduct() {
     const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
    const [error, setError] = useState('');
    const [good, setGood] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(() => {
        console.log(params);
        if (params.id === ":id") {
           
        } else {
            getProductDetails()
            setGood(true);
       }
      
    }, [])
    

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:7000/products/${params.id}`);
        result = await result.json();
    
        console.log(result)
        

        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
      
    }
    


    const handleClick = async () => {
      if (!name || !price || !category || !company) {
        setError(true);
        console.log("Enter All deatils")

      } else {
        let result = await fetch(`http://localhost:7000/products/${params.id}`, {
            method: "put",
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
     
      <h2 className='register-header'>Update Products</h2>
       
     
         {
          error && <p className='invalid-input'>Please Enter All Details</p>
          }
          {
              good?   <div className='register-box-add'>
        <input className='inputBox' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name'></input>
       
          <input className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Price"></input>
              <input className='inputBox' value={category} type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)}></input>
               <input className='inputBox' value={company} type="text" placeholder="Enter Company" onChange={(e)=>setCompany(e.target.value)}></input>
          <button className='appButton' onClick={handleClick} type='Button'>Update</button>      
          </div>  :<div><h1>Go Click Update</h1></div>
        }
    </div>
  )
}

export default UpdateProduct