import React from 'react'

export const NewPost = ({handleSubmit,postTitle,postBody,setPostBody,setPostTitle}) => {
  return (
    <main className='classPost'>

        <form   className='newpost' onSubmit={handleSubmit}>
        <h1 className='newposthead'>Post your news here</h1>
        <label htmlFor='titleLabel'>Post Title</label>
        <input type='text' id='posttitle' value={postTitle} placeholder='Enter news title'
                onChange={(e)=>setPostTitle(e.target.value)}
        />

        <label htmlFor='bodyLabel'>Post Content</label>
        <textarea type='text' id='postbody' value={postBody} placeholder='Type the news...'
                onChange={(e)=>setPostBody(e.target.value)}
        />

        <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>


    </main>
  )
}
