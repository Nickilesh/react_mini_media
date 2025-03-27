import React from 'react';
import Post from './Post';

export const Feed = ({ posts, deletePost }) => {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div className="feed-card" key={post.id}>
          <Post post={post} deletePost={deletePost} />
          <br/>
          <hr />
        </div>
      ))}
    </div>
  );
};
