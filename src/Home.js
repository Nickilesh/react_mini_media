import React from 'react'
import { Feed } from './Feed'

export const Home = ({posts}) => {

  return (
    <main className='home'>
      {posts.length?(

        <Feed posts={posts}/>
      ):(
      <p style={{marginTop:"2 rem"}}>Nothing to display.</p>  
      )}
        
    </main>
  )
}
