import React from 'react'
import PropTypes from 'prop-types'
import {NavLink, Link, Outlet} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="leftnav">
          <ul>
            <li className="logo"><img src={props.logo} alt="logo"/></li>
            <li className="logo"><img src='images/blogus.jpeg' alt="logo"/></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
        <div className="rightnav">
          <ul>
            <li><Link to="/login"><button className="button"> Login </button></Link></li>
            <li><Link to="/signup"><button className="button"> Signup </button></Link></li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  logo: 'logo192.png'
};