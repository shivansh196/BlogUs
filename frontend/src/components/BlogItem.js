import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import blogContext from '../context/blogs/blogContext';

export default function BlogItem(props) {
  const context = useContext(blogContext);
  const {emptyRead} = context;
  const handleRead = () => {
    emptyRead();
  }

  return (
    <div>
      <div className="blogcover">
        <img src={`images/${props.image}`} className="showblog" alt='cover'/>
        <h3 className="name showblog" >{props.title}</h3>
        <h5 className="name showblog">{props.desc}</h5>
        <Link to={`/${props.id}`} className='readMore' onClick={handleRead}>Read more</Link>
      </div>
    </div>
  )
}

BlogItem.defaultProps = {
  image: 'default.png'
};