import React from 'react';

const Post = ({ post, deletePost }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small className="post-date">{post.datetime}</small>
      <br></br>
      <button className='delete-btn' onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
