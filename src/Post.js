import React from 'react'

export const Post = ({post}) => {
  return (
    <section>
    <h2>{post.title}</h2>
    <small className="post-date">{post.datetime}</small>
    <hr/>
    <p className='postBody'>{post.body}</p>
    
    </section>
  )
}
export default Post