import React from 'react'
import Nav from './Nav';
import SignIn from './Signin';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './app.css'
import Footer from './Footer';
import PrivateComponent from './components/PrivateComponent';


function App() {
  return (
      <div className='app'>
          <BrowserRouter>
          <Nav/>
              <h1 className='header-name'>Ecommerce DashBoard</h1>
              <Routes>
                  <Route  element={<PrivateComponent/>}>
                   <Route path='/' element={<h1>home</h1>}></Route> 
                  <Route path='/add' element={<h1>Add</h1>}></Route>    
                  <Route path='/update' element={<h1>update</h1>}></Route>    
                  <Route path='/logout' element={<h1>logout</h1>}></Route> 
                  <Route path='/profile' element={<h1>profile</h1>}></Route> 
                  </Route>   
                 <Route path='/signin' element={<SignIn/>}></Route>

                  
                  
              </Routes>
          </BrowserRouter>
          <Footer/>
   </div>
  )
}

export default App