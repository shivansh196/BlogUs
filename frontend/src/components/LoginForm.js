import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",pass:""
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
    const {email,pass} = user;
    const res = await fetch("/login", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email:email,
        pass
      })
    });
    const data = await res.json();
    if(data.success){
      // window.alert(data.message);
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
              <input type="password" className="input" name="pass" id="password" 
              value = {user.pass}
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
