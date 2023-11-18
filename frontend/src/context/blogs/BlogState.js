import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import BlogContext from './blogContext'

const BlogState = (props) =>{
      const navigate = useNavigate();
      const blogsInitial = [];
      const [blogs,setBlogs] = useState(blogsInitial);
      const [read,setRead] = useState(blogsInitial);

      //Read Blog with Id
      const readBlog = async(id)=>{
        const res = await fetch(`/api/v1/blogs/readblog/${id}`, {
            method: "GET",
            headers:{
              "Content-Type" : "application/json"
            }
          });
          const data = await res.json();
          setRead(data);
      }

      const emptyRead = ()=>{
          setRead([]);
      }

      //Get All Blogs
      const getBlogs = async()=>{
        const res = await fetch("/api/v1/blogs/getblogs", {
            method: "GET",
            headers:{
              "Content-Type" : "application/json"
            }
          });
          const data = await res.json();
          setBlogs(data);
      }

      //Get All Blogs
      const getUserBlogs = async()=>{
        if(!localStorage.getItem("token")){
          navigate('/login');
        }
        const res = await fetch("/api/v1/blogs/fetchallblogs", {
            method: "GET",
            headers:{
              "Content-Type" : "application/json",
              "auth-token" : localStorage.getItem("token")
            }
          });
          const data = await res.json();
        //   console.log(data);
          setBlogs(data);
      }
      
      
    return(
        <BlogContext.Provider value={{blogs,getBlogs,getUserBlogs,read,readBlog,emptyRead}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;
