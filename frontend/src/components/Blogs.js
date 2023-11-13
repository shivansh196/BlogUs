import React from 'react'
import BlogItem from './BlogItem';

const content = [
  {
    id:1,
    title: "Title of my first blog is here",
    desc: "This is the description of my first blog"
  },
  {
    id:2,
    title: "Title of my second blog is here",
    desc: "This is the description of my second blog"
  },
  {
    id:3,
    title: "Title of my third blog is here",
    desc: "This is the description of my third blog"
  }
];

export default function Blogs() {
  return (
    <div class="blogcontainer">
      <div class="topblogs">
        <h1>Top Blogs...</h1>
        <ul id="parentul">
          {content.map((element)=>{
            return(
              <li key={element.id}>
                <BlogItem title={element.title.length>16?element.title.slice(0,12)+"...":element.title} desc={element.desc.length>23?element.desc.slice(0,19)+"...":element.desc} id={element.id}/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
