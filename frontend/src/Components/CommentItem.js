import React, { useContext, useEffect, useState} from 'react';
import blogContext from '../context/blogs/blogContext';
import { useParams } from "react-router-dom"

export default function CommentItem(props) {
  const context = useContext(blogContext);
  let { comments, getComments} = context;
  const { id } = useParams();
  useEffect(() => {
    getComments(id);
  },[])

  return (
    <div>
      <div className='commentblock'>
        <h4>My Comment</h4>
      </div>
    </div>
  )
}
