import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Blogs from './Components/Blogs';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Createblog from './Components/Create/Createblog';

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element = {<Navbar logo="images/logo.jpeg"/>}>
            <Route index element = {<Blogs/>}/>
            <Route path='about' element = {<About/>}/>
            <Route path='login' element = {<LoginForm/>}/>
            <Route path='signup' element = {<SignupForm/>}/>
            <Route path='/create' element= {<Createblog/>}/>
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;