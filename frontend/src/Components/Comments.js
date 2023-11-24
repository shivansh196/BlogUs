import React, { useContext, useEffect, useState} from 'react';
import blogContext from '../context/blogs/blogContext';
import { useParams } from "react-router-dom"
import CommentItem from './CommentItem';

export default function Comments() {
  const context = useContext(blogContext);
  let { comments, getComments,newComment} = context;
  const [box,setBox] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getComments(id);
    console.log(comments)
  },[])

  const handleInputs = (event) =>{
    console.log(event);
    setBox(event.target.value);
  }
  const handleCancel = (e) =>{
    e.preventDefault();
    setBox("");
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    newComment(id,box);
    setBox("");
  }

  return (
    <div>
      <div className='comment'>
        <div className='commentbox'>
          <form method="post">
            <textarea id="commentarea" name="commentarea" value = {box} onChange={handleInputs} placeholder='Add a comment...'></textarea>
            <div className='commentbuttons'>
                <button className="button" value="cancel" onClick={handleCancel}> Cancel </button>
                <button type="submit" className="button" value="comment" onClick={handleSubmit}> Comment </button>
            </div>
          </form>
        </div>
        <div className='allcomments'>
          <CommentItem/>
          <CommentItem/>
          {/* {comments.map((e)=>{
            return(
              <li key={e._id}>
                <CommentItem comment={e.comments} id={e._id}/>
              </li>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}
