import React, {useContext, useEffect} from 'react';
import blogContext from '../../context/blogs/blogContext';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

import Card from './card';

const Dashboard = () => {
  const context = useContext(blogContext);
  const {blogs,getUserBlogs} = context;
  useEffect(()=>{
    getUserBlogs();
  })
 return (
    <div className="Dashboard">
      
      <div className="dashboard">
        <h1>Welcome to the Blog Dashboard</h1>
        <div className="cards">
          {blogs.map((e)=>{
            return(
              <li key={e._id}>
                <Card title={e.title.length>16?e.title.toString().slice(0,12)+"...":e.title} 
                desc={e.description.length>23?e.description.toString().slice(0,19)+"...":e.description} 
                image="https://via.placeholder.com/150" id={e._id}/>
              </li>
            )
          })}
          {/* <Card 
            image="https://via.placeholder.com/150" 
            title="Blog Title 1" 
            content="This is the content of blog 1." 
          />
          <Card 
            image="https://via.placeholder.com/150" 
            title="Blog Title 2" 
            content="This is the content of blog 2." 
          />
          <Card 
            image="https://via.placeholder.com/150" 
            title="Blog Title 3" 
            content="This is the content of blog 3." 
          /> */}
        </div>
      </div>
      <Link to="/profile">
        <Button color="primary">Profile</Button>
      </Link>
      <Link to="/create">
        <Button color="success">Create Blog</Button>
      </Link>
    </div>
 );
};

export default Dashboard;