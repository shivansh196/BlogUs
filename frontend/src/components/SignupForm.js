import React from 'react'
import {Link} from 'react-router-dom'

export default function SignupForm() {
  return (
    <div>
      <div className="outer">
        <div className="innerleft">
          <h3>Already have an account?</h3>
          <h3>Login <Link to="/login">here</Link></h3>
        </div>
        <div class="mains">
          <form action="/signup" method="post">
            <div className="section">
              <input type="email" className="input" name="email" id="username" placeholder="example@mail.com"/>
              <label htmlFfor="username">USERNAME/E-MAIL</label>
            </div>
            <div class="section">
              <input type="password" className="input" name="pass" id="password" placeholder="********"/>
              <label htmlFfor="password">PASSWORD</label>
            </div>
            <div class="section">
              <input type="password" className="input" name="conpass" id="confpass" placeholder="********"/>
              <label htmlFor="confpass">CONFIRM PASSWORD</label>
            </div>
            <div className="section">
              <button type="submit" class="button"> SIGN UP </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
