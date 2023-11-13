import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Blogs from './components/Blogs';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
