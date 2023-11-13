import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function SignupForm() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",pass:"",conpass:""
  })
  
  let name, value;
  const handleInputs = (event) =>{
    console.log(event);
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]:value});
  }

  const PostData = async(e) =>{
    e.preventDefault();
    const {email,pass,conpass} = user;
    const response = await fetch("/signup", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email:email,
        pass:pass,
        conpass:conpass
      })
    });
    const data = await response.json();
    // console.log(data)
    if(data.success){
      window.alert(data.message);
      console.log(data.message);
      navigate("/login");
    } else {
      window.alert(data.message);
      console.log(data.message);
    }
  }

  return (
    <div>
      <div className="outer">
        <div className="innerleft">
          <h3>Already have an account?</h3>
          <h3>Login <Link to="/login">here</Link></h3>
        </div>
        <div className="mains">
          <form action="/signup" method="post" onSubmit={PostData}>
            <div className="section">
              <input type="email" className="input" name="email" id="username" 
              value = {user.email}
              onChange={handleInputs}
              placeholder="example@mail.com"/>
              <label htmlFor="username">USERNAME/E-MAIL</label>
            </div>
            <div className="section">
              <input type="password" className="input" name="pass" id="password" 
              value = {user.pass}
              onChange={handleInputs}
              placeholder="********"/>
              <label htmlFor="password">PASSWORD</label>
            </div>
            <div className="section">
              <input type="password" className="input" name="conpass" id="confpass" 
              value = {user.conpass}
              onChange={handleInputs}
              placeholder="********"/>
              <label htmlFor="confpass">CONFIRM PASSWORD</label>
            </div>
            <div className="section">
              <button type="submit" className="button" value="signup"> SIGN UP </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
