import React from 'react'
import {Link} from 'react-router-dom'

export default function LoginForm() {
  return (
    <div>
      <div className="outer">
        <div className="mainl">
          <form action="/login" method="post">
            <div class="section">
              <input type="email" className="input" name="email" id="username" placeholder="example@mail.com"/>
              <label htmlFor="username">USERNAME/E-MAIL</label>
            </div>
            <div className="section">
              <input type="password" className="input" name="pass" id="password" placeholder="********"/>
              <label htmlFor="password">PASSWORD</label>
            </div>
            <div className="section">
              <button type="submit" className="button"> LOGIN </button>
            </div>
          </form>
        </div>
        <div className="innerright">
          <h3>Don't have an account?</h3>
          <h3>Signup <Link to="/signup">here</Link></h3>
        </div>
      </div>
    </div>
  )
}
