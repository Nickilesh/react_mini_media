import { About } from './About';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Home } from './Home';
import { Missing } from './Missing';
import { Nav } from './Nav';
import { NewPost } from './NewPost';
import { useEffect, useState} from 'react';
import api from "./api/posts"

function App() {

  const [search,setSearch]=useState("");
  const [searchResults,setSearchResults]=useState([]);
  const [postTitle,setPostTitle]=useState("");
  const [postBody,setPostBody]=useState("");


  const [posts,setPosts]=useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postTitle.trim() || !postBody.trim()) return; 
  
    const currentDate = new Date().toLocaleString(); 
  
    const newPost = { 
      title: postTitle, 
      body: postBody, 
      datetime: currentDate 
    };
  
    try {
      const response = await api.post('/posts', newPost);
      setPosts([...posts, response.data]);
      setPostTitle('');
      setPostBody('');
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{

    const filterResults=posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filterResults.reverse());
},[posts,search])

  return (
    <div className="App">

        <Header title="MINI MEDIA"/>
        <br className='break'/>
        <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home posts={searchResults}/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/newpost' element={<NewPost postBody={postBody} postTitle={postTitle} 
        setPostBody={setPostBody} setPostTitle={setPostTitle}
        handleSubmit={handleSubmit}/>}/>
        
        <Route path='*' element={<Missing/>}/>
        
      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
