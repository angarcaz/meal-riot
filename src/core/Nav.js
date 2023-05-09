import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div>
            <h3><Link to="/">MealRiot</Link></h3>
        </div>
        <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ul>
    </nav>
  )
}

export default Nav