import React from "react";
import './Post.css'

const Post = ({ author, content, image, date }) => {

 return (
    <>
    <div className= 'window'>
        <img className= 'icon' src={author.photo} alt="author-photo"/>
           <div className= 'header'>
              <p className= 'name'>{author.name}</p>
              <p className= 'nickname'>{author.nickname}</p>
              <p className= 'date'>{date}</p>
              <p className='content'><h2>{content}</h2></p>
           </div>
        <img className= 'content_image' src= {image}></img>
    </div>
    </>
 )
}

export default Post;