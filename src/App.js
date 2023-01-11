import React from 'react'
import Nav from './Nav';
import SignIn from './Signin';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './app.css'
import Footer from './Footer';
import PrivateComponent from './components/PrivateComponent';
import Login from './Login';
import AddProduct from './AddProduct';
import Products from './Products';
import UpdateProduct from './UpdateProduct';


function App() {
  return (
      <div className='app'>
          <BrowserRouter>
          <Nav/>
              <h1 className='header-name'>Ecommerce DashBoard</h1>
              <Routes>
                  <Route  element={<PrivateComponent/>}>
                   <Route path='/' element={<Products/>}></Route> 
                  <Route path='/add' element={<AddProduct/>}></Route>    
                  <Route path='/update/:id' element={<UpdateProduct/>}></Route>    
                  <Route path='/logout' element={<h1>logout</h1>}></Route> 

                  </Route>   
                  <Route path='/signin' element={<SignIn />}></Route>
                   <Route path='/login' element={<Login/>}></Route>

                  
                  
              </Routes>
          </BrowserRouter>
          <Footer/>
   </div>
  )
}

export default App