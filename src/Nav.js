import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
      <div>
          <ul className='header-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">User Products</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/profile">Profile</Link></li>
              
          </ul>      
    </div>
  )
}

export default Nav