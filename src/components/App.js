import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreatePost, Home, Page404, Navbar, PostDetail } from './';

function App() {
  return (
    <div className="container">
   
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:postId" element={<PostDetail />} />
          <Route exact path="/create-post" element={<CreatePost />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
