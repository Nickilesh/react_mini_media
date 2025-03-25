import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <small className="post-date">{post.datetime}</small>
      <hr/>
      <p>{post.body}</p>
      
    </div>
  );
};

export default Post;
