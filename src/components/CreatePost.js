import React, { useState } from 'react';

import { firestore } from '../firebase';

function CreatePost() {
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault();

   
    firestore.collection('posts').add({
      title,
      content,
      subTitle,
      createdAt : new Date(),
    });


    console.log('Title', title);
    console.log('subTitle', subTitle);
    console.log('Content', content);

  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label> Subtitle</label>
          <input
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
