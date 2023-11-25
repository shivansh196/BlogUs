import React, {useContext} from 'react';
import blogContext from '../../context/blogs/blogContext';
import { useNavigate, useParams } from 'react-router-dom';
import './card.css';

const Card = ({ image, title, content, blogId, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const context = useContext(blogContext);
  const { id } = useParams();
  const {deleteBlog} = context;

  const handleEditBlog = () => {
    navigate(`/editblog/${blogId}`);
  };

  const handleDeleteBlog = async () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      deleteBlog(id);
      // try {
      //   await axios.delete(`http://localhost:2500/api/v1/blogs/deleteblog/${blogId}`);
      //   window.location.reload(); // Alternatively, update the state in the parent component
      // } catch (error) {
      //   console.error('Error deleting blog:', error);
      // }
    }
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
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
