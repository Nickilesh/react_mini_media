import React from 'react';

export const NewPost = ({ handleSubmit, postTitle, postBody, setPostBody, setPostTitle }) => {
  return (
    <main className='classPost'>
      <form className='newpost' onSubmit={handleSubmit}>
        <h1 className='newposthead'>Post your news here</h1>

        <label htmlFor='posttitle'>Post Title</label>
        <input 
          type='text' 
          id='posttitle' 
          value={postTitle} 
          onChange={(e) => setPostTitle(e.target.value)} 
        />

        <label htmlFor='postbody'>Post Body</label>
        <textarea 
          id='postbody' 
          value={postBody} 
          onChange={(e) => setPostBody(e.target.value)} 
        />

        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};
