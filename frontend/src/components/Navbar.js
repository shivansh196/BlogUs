import React from 'react'
import PropTypes from 'prop-types'
import {NavLink, Link, Outlet, useNavigate} from 'react-router-dom'

export default function Navbar(props) {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="blogusnav">
      <nav>
        <div className="leftnav">
          <ul>
            <li className="logo"><img src={props.logo} alt="logo"/></li>
            <li className="logo"><img src='images/blogus.jpeg' alt="logo"/></li>
            <li><NavLink to="/">Blogs</NavLink></li>
            <li><NavLink to="/profile">Dashboard</NavLink></li>
          </ul>
        </div>
        <div className="rightnav">
          <ul>
            {!localStorage.getItem('token')?<>
            <li><Link to="/login"><button className="button"> Login </button></Link></li>
            <li><Link to="/signup"><button className="button"> Signup </button></Link></li>
            </>:<li><button className="button" onClick={handleLogout}> Logout </button></li>}
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