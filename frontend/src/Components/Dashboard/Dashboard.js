import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

import Card from './card';

const Dashboard = () => {
 return (
    <div className="Dashboard">
      
      <div className="dashboard">
        <h1>Welcome to the Blog Dashboard</h1>
        <div className="cards">
          <Card 
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
          />
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