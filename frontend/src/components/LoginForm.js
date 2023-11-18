import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  })
  const [user,setUser] = useState({
    email:"",password:""
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
    const {email,password} = user;
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email:email,
        password
      })
    });
    const data = await res.json();
    if(data.success){
      localStorage.setItem('token', data.authToken);
      console.log(data.message);
      navigate("/");
    } else {
      window.alert(data.message);
      console.log(data.message);
    }
  }

  return (
    <div>
      <div className="outer">
        <div className="mainl">
          <form action="/login" method="post">
            <div className="sectionl">
              <input type="email" className="input" name="email" id="username"
              value = {user.email}
              onChange={handleInputs}
              placeholder="example@mail.com"/>
              <label htmlFor="username">USERNAME/E-MAIL</label>
            </div>
            <div className="sectionl">
              <input type="password" className="input" name="password" id="password" 
              value = {user.password}
              onChange={handleInputs}
              placeholder="********"/>
              <label htmlFor="password">PASSWORD</label>
            </div>
            <div className="sectionl">
              <button type="submit" className="button" value="login" onClick={PostData}> LOGIN </button>
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
