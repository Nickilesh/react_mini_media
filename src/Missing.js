import React from 'react'
import { Link } from 'react-router-dom'

export const Missing = () => {
  return (
    <main className='missing-container'>
        <h1>Something went wrong</h1>
        <p>Kindly go back to our <Link to='/'>Home page</Link></p>
    </main>
  )
}
export default Missing