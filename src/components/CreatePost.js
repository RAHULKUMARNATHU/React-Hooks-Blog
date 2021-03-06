// import React, { useState } from 'react';
import { useFormInput } from '../hooks';
import { firestore } from '../firebase';
import { toast, Toaster } from 'react-hot-toast';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  
  function handleSubmit(e) {
    e.preventDefault();

    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,

      createdAt: new Date(),
    });
   
    toast.success('Successfully Created!')
    title.handleReset();
    subTitle.handleReset();
    content.handleReset();
    
    console.log('Title', title);
    console.log('subTitle', subTitle);
    console.log('Content', content);
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input {...title} />
          </div>
          <div className="form-field">
            <label> Subtitle</label>
            <input {...subTitle} />
          </div>
          <div className="form-field">
            <label>Content</label>
            <textarea {...content}></textarea>
          </div>
          <button className="create-post-btn">Create Post</button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
