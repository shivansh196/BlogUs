import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './card.css';

const Card = ({ image, title, content, blogId, onEdit, onDelete }) => {
  const history = useNavigate();

  const handleEditBlog = () => {
    history.push(`/editblog/${blogId}`);
  };

  const handleDeleteBlog = async () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`http://localhost:2500/api/v1/blogs/deleteblog/${blogId}`);
        window.location.reload(); // Alternatively, update the state in the parent component
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  // Assuming 'image' is the filename or relative path to the image on the backend
  const imageUrl = `http://localhost:2500/file/${image}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="card-buttons">
        <button onClick={handleEditBlog}>Edit Blog</button>
        <button onClick={handleDeleteBlog}>Delete Blog</button>
      </div>
    </div>
  );
};

export default Card;
