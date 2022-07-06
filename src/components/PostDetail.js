import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
        setLoading(false);
      });
  }, [postId]);
  return (
    <div className="post-detail">
      {isLoading && <h1>Loading Contents...</h1>}
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
