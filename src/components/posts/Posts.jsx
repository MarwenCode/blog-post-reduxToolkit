import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { addPost, deletePost } from "../../redux/postsSlice";
import uuid from 'react-uuid';
import "./posts.scss";
const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()
  console.log(title, description)
  const newPosts = useSelector((state) => state.posts.items)

  const createPost = () => {
    // e.preventDefault();
    dispatch(addPost({id:uuid(), title, description}));
    setTitle("")
    setDescription("")
  
  
  }

  const toDelete = (id) => {
    dispatch(deletePost(id))

  }





  return (
    <div className="posts">
      <div className="form">
        <h1 className="header"> React ReduxToolkit CRUD</h1>
        <div className="title">
          <input
           type="text" 
           placeholder="Enter a title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           
           />
        </div>
        <div className="description">
          <textarea 
          type="text"
           placeholder="Enter a desciption" 
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           
           />
        </div>

        {/* <button className="AddPostbtn" onClick={()=> {
           dispatch(addPost({id:1, title, description}))}}>
            Add Post
        </button> */}
        <button className="AddPostbtn" onClick={() => createPost()}>
            Add Post
        </button>
      </div>
      
        {newPosts.map((newpost) => (
          <div className="post" >
          <>
            <div className="bloc" >
           <h2 className="title">{newpost.title}</h2>
           <p className="desc">{newpost.description}</p>
           </div>
             <div className="icons">
             <AiFillEdit className="editIcon"   />
             {/* <AiFillDelete className="deleteIcon"  onClick={() => dispatch(deletePost(newpost.id))} /> */}
             <AiFillDelete className="deleteIcon"  onClick={() => toDelete(newpost.id)} />
       
     
             </div>
          
          </>
         
          </div>

        ))}

       
    
      
       
   
    </div>
  );
};

export default Posts;

