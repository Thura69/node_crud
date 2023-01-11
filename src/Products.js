import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts =async () => {
        let result = await fetch("http://localhost:7000/products");
        result = await result.json();
        SetProducts(result);

    }


    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:7000/products/${id}`, {
            method:"Delete"
        })
        result = await result.json();
     
        if (result) {
            getProducts();
       }
    }

   
    if (products) {
        return (
           <div className='product-lists'>
                <h3>Product Lists</h3>
              
          <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
              <li>Operation</li>
              
          </ul>
          
              {
                  products.map((item, index) => (
                      <ul>
                          <li>{index + 1}</li>
                          <li>{item.name}</li>
                          <li>{item.price}</li>
                          <li>{item.category}</li>
                          <li>{item.company}</li>
                          <li><button onClick={() => { deleteProduct(item._id) }} className='btn-delete'>Delete</button>
                          <Link className='update-one' to={"/update/"+item._id}>Update</Link>
                          </li>
                          
                      </ul>
              ))
              }
         
       
    </div>
        )
    } else if (!products) {
        return (
            <div className='add-new-box'>
                 <h1 className='add-new'>Add more items</h1>
           </div>
        )
    }

   
}

export default Products