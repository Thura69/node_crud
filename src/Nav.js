
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear('user');
    navigate('/signup')
  }
  return (
    <div>
      {
        auth?  <ul className='header-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">Update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logOut} to="/signin">LogOut ( {JSON.parse(auth).name} )</Link></li>
        
        </ul>
          
          :
          <ul className='header-ul'>
           <li><Link to="/signin">SingIn</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      }
         
         
    </div>
  )
}

export default Nav