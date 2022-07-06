import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log('posts', posts);
        setPosts(posts);
        setLoading(false);
      });
  }, []);
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Rahul</div>
      {isLoading && <h2>Loading Posts...</h2>}
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
