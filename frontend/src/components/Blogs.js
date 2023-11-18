import React, {useContext, useEffect} from 'react';
import BlogItem from './BlogItem';
import blogContext from '../context/blogs/blogContext';


export default function Blogs(props) {
  const context = useContext(blogContext);
  const {blogs,getBlogs,getUserBlogs} = context;
  
  useEffect(()=>{
    if(props.func==="Top"){
      getBlogs();
    } else if(props.func==="My"){
      getUserBlogs();
    }
  })

  return (
    <div className="blogcontainer">
      <div className="topblogs">
        <h1>{props.func} Blogs...</h1>
        <ul id="parentul">
          {blogs.map((e)=>{
            return(
              <li key={e._id}>
                <BlogItem title={e.title.length>16?e.title.toString().slice(0,12)+"...":e.title} 
                desc={e.description.length>23?e.description.toString().slice(0,19)+"...":e.description} 
                image={e.picture} id={e._id}/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
