// Importing necessary libraries and components
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchUser } from 'backend/api/auth/getuser'; // for user-related actions
//import { fetchBlogs } from '/api/v1/blogs/fetchallblogs'; // for blog-related actions
//import CustomNavbar from './CustomNavbar'; 



// Home component
const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  
  return (
    <div>
      <h2>Welcome to the Blog App!</h2>
      <ul>
        {/* Display a list of blog posts */}
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Profile component
const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

// CreateBlog component
const CreateBlog = () => (
  <div>
    <h2>Create a New Blog</h2>
    {/* Add your logic and form for creating a new blog */}
  </div>
);

// Dashboard component
const Dashboard = () => {
  const dispatch = useDispatch();

  // Fetch user and blog data when the component mounts
//   useEffect(() => {
//     dispatch(fetchUser()); // Use your user-related action
//     dispatch(fetchBlogs()); // Use your blog-related action
//   }, [dispatch]);

  return (
    <Router>
      <div>
        

        {/* Routes */}
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/create" component={CreateBlog} />
        </Routes>
      </div>
    </Router>
  );
};
export default Dashboard;