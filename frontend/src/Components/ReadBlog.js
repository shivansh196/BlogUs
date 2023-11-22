import React, { useContext, useEffect} from 'react';
import blogContext from '../context/blogs/blogContext';
import { useParams } from "react-router-dom"

export default function ReadBlog() {
  const context = useContext(blogContext);
  let { read, readBlog } = context;
  const { id } = useParams();
  useEffect(() => {
    readBlog(id);
  }, [])

  return (
    <div>
      <div className='blogcontainer'>
        <div className='blogcontents'>
          <div className='blogtitle'>
            <h1>{read.title}</h1>
            <img src={!read.picture ? "images/default.png" : `images/${read.picture}`} alt="Cover" />
          </div>
          <div className='blogdesc'>
            <h3>{read.description}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
