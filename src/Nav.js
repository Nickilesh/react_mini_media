
import { Link } from 'react-router-dom'
export const Nav = ({search,setSearch}) => {
  
  return (
        <nav className='Nav'>

                <form className='form' onSubmit={(e)=>e.preventDefault}>

                    <label className='navLabel'>Search Posts</label>
                    <input type='text' placeholder='Search posts'
                            id='ip'
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                    />

                </form>

                <ul>

                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/newpost'>POST</Link></li>

                </ul>

        </nav>

    )
}
