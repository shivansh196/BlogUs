import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogItem(props) {
  return (
    <div>
      <div className="cover">
        <img src={`images/cover${props.id}.jpeg`} id={`${props.id}`} className="playsong" alt='cover'/>
        <h3 className="name playsong" id={`${props.id}`}>{props.title}</h3>
        <h5 className="name playsong">{props.desc}</h5>
        <Link to='/about' className='readMore'>Read more</Link>
      </div>
    </div>
  )
}
