import React, { useContext, useEffect, useState} from 'react';
import blogContext from '../context/blogs/blogContext';
import { useParams } from "react-router-dom"

export default function CommentItem(props) {
  const context = useContext(blogContext);
  const { id } = useParams();

  return (
    <div>
      <div className='commentblock'>
        <h4>{props.comment}</h4>
      </div>
    </div>
  )
}
