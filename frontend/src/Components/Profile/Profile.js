import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button, Form } from "react-bootstrap";
import Identicon from "react-identicons";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
import NavBar from "../Navbar";

import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [isBlog, setIsBlog] = useState(true);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("token")) {
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/getuser`, {
            token: localStorage.getItem("token"),
          });

          setName(res.data.name);
          setEmail(res.data.email);
          setBlogs(res.data.blogs);
          setLikedBlogs(res.data.likedBlogs);
          setLoading(false);
        } else {
          setLoading(false);
          navigate("/login"); // Redirect to login if no token is present
        }
      } catch (err) {
        setLoading(false);
        console.error("Error fetching profile data:", err);
      }
    };

    fetchData();
  }, [navigate]);

  const handlePost = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/api/user/deleteaccount`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          localStorage.removeItem("token");
          navigate("/login");
        })
        .catch((err) => {
          console.error("Error deleting account:", err);
        });
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setUpdatedName(name);
    setUpdatedEmail(email);
  };

  const handleSave = () => {
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/api/user/updateprofile`,
        {
          name: updatedName,
          email: updatedEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setName(updatedName);
        setEmail(updatedEmail);
        setEditMode(false);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
      });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="profile-card">
          <Card>
            <Card.Header>Profile</Card.Header>
            <Card.Body>
              <div className="basic-profile">
                <Identicon className="user-icon" string={email} size={85} />
                <div>
                  {editMode ? (
                    <Form>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={updatedName}
                          onChange={(e) => setUpdatedName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={updatedEmail}
                          onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  ) : (
                    <>
                      <h1>{name}</h1>
                      <div className="user-email">{email}</div>
                      <div className="user-info">Blogs Published - {blogs.length}</div>
                    </>
                  )}
                </div>
              </div>
              <ListGroup>
                <ListGroup.Item
                  className={`${isBlog ? "active" : ""}`}
                  onClick={() => {
                    setIsBlog(true);
                  }}
                >
                  Your Blogs <span>{blogs.length}</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className={`${!isBlog ? "active" : ""}`}
                  onClick={() => {
                    setIsBlog(false);
                  }}
                >
                  Liked Blogs <span>{likedBlogs.length}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          {editMode ? (
            <div className="edit-buttons">
              <Button variant="success" onClick={handleSave}>
                Save
              </Button>
              <Button variant="light" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </div>
          ) : (
            <div className="edit-buttons">
              <Button variant="info" onClick={handleEdit}>
                Edit Profile
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete Account
              </Button>
            </div>
          )}
        </div>
        {loading ? (
          <div className="loader">
            <BallTriangle radius="4px" color="#8b39bb" ariaLabel="loading-indicator" />
          </div>
        ) : (
          <div className="profile-blogs">
            {isBlog ? (
              <>
                <h1 className="main-heading">Your Blogs</h1>
                <div>
                  {blogs.map((blog) => (
                    <Card className="blog-card" key={blog._id}>
                      {blog.cloudinaryId ? (
                        <Card.Img variant="top" src={blog.image} />
                      ) : null}
                      <Card.Body>
                        <h1
                          onClick={() => {
                            handlePost(blog._id);
                          }}
                        >
                          {blog.title}
                        </h1>
                        <div className="blog-info">{blog.author}</div>
                        <div className="blog-info">
                          {new Date(blog.created_at).toDateString()}
                        </div>
                        <div className="blog-items">
                          <div>
                            <span>
                              <AiOutlineHeart /> {blog.likes.length} Reactions
                            </span>
                            <span>
                              <FaRegComment /> {blog.comments.length} Comments
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h1 className="main-heading">Liked Blogs</h1>
                <div>
                  {likedBlogs.map((blog) => (
                    <Card
                      className="blog-card"
                      key={blog._id}
                      onClick={() => {
                        handlePost(blog._id);
                      }}
                    >
                      {blog.cloudinaryId ? (
                        <Card.Img variant="top" src={blog.image} />
                      ) : null}
                      <Card.Body>
                        <h1>{blog.title}</h1>
                        <div className="blog-info">{blog.author}</div>
                        <div className="blog-info">
                          {new Date(blog.created_at).toDateString()}
                        </div>
                        <div className="blog-items">
                          <span>
                            <AiOutlineHeart /> {blog.likes.length} Reactions
                          </span>
                          <span>
                            <FaRegComment /> {blog.comments.length} Comments
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
