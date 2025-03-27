import { About } from './About';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Home } from './Home';
import { Missing } from './Missing';
import { Nav } from './Nav';
import { NewPost } from './NewPost';
import { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const savedPosts = localStorage.getItem("posts");
  
      if (savedPosts && JSON.parse(savedPosts).length > 0) {
        
        setPosts(JSON.parse(savedPosts));
      } else {
        try {
          
          const response = await fetch('/data.json?' + new Date().getTime()); // Cache Bypass
  
          if (!response.ok) throw new Error(` HTTP error! Status: ${response.status}`);
  
          const data = await response.json();
          console.log(" Fetched data from data.json:", data);
  
          if (data.posts && data.posts.length > 0) {
            localStorage.setItem("posts", JSON.stringify(data.posts));
            setPosts(data.posts);
          } else {
            console.error("data is empty", data);
          }
        } catch (error) {
          console.error("Error loading data", error);
        }
      }
    };
  
    loadPosts();
  }, []);
  
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postTitle.trim() || !postBody.trim()) return;

    const currentDate = new Date().toLocaleString();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const newPost = { id, title: postTitle, body: postBody, datetime: currentDate };

    setPosts([...posts, newPost]);
    setPostTitle('');
    setPostBody('');
  };
  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  
  useEffect(() => {
    const filterResults = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterResults);
  }, [posts, search]);

  return (
    <div className="App">
      <Header title="MINI MEDIA" />
      <br className="break" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} deletePost={deletePost}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={
          <NewPost
            postBody={postBody}
            postTitle={postTitle}
            setPostBody={setPostBody}
            setPostTitle={setPostTitle}
            handleSubmit={handleSubmit}

          />
        } />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
