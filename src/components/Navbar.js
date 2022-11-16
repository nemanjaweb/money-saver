import styles from './Navbar.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}><span>$</span> Tracker</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar