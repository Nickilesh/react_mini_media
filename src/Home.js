import React from 'react';
import { Feed } from './Feed';

export const Home = ({ posts, deletePost }) => {  
  return (
    <main className="home">
      {posts.length > 0 ? (
        <Feed posts={posts} deletePost={deletePost} /> 
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>No posts available.</p>
      )}
    </main>
  );
};
