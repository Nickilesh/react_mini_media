import React from 'react';
import Post from './Post';

export const Feed = ({ posts }) => {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div className="feed-card" key={Number(post.id)}>
          <Post post={post} />
          
        </div>
      ))}
    </div>
  );
};
