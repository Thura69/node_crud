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
          <ul className='header-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">User Products</Link></li>
       
        <li>{auth?<Link onClick={logOut} to="/signin">Logout</Link>:<Link to="/signin">SingIn</Link>}</li>
        <li><Link to="/profile">Profile</Link></li>
              
          </ul>      
    </div>
  )
}

export default Nav