import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Blogs from './Components/Blogs';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import BlogState from './context/blogs/BlogState';
import ReadBlog from './Components/ReadBlog';
import Createblog from './Components/Create/Createblog';
import Profile from './Components/Profile/Profile';

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BlogState>
          <Routes>
            <Route path='/' element={<Navbar logo="images/logo.jpeg" />}>
              <Route index element={<Blogs func="Top" />} />
              <Route path='about' element={<About />} />
              <Route path='login' element={<LoginForm />} />
              <Route path='signup' element={<SignupForm />} />
              <Route path='/create' element={<Createblog />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/myblogs' element={<Blogs func="My" />} />
              <Route path='/:id' element={<ReadBlog />} />
              <Route path='*' element={<div className='blogcontainer'><h1>404 Page not found</h1></div>} />
            </Route>
          </Routes>
        </BlogState>
      </div>
    </BrowserRouter>
  );
}

export default App;