import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost,updatePost } from "../../redux/postsSlice";
import uuid from "react-uuid";
import "./posts.scss";
const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updatedTitle, setupdatedTitle] = useState("");
  const [updatedescription, setUpdatedDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  console.log(title, description);
  const newPosts = useSelector((state) => state.posts.items);

  const createPost = () => {
    // e.preventDefault();
    dispatch(addPost({ id: uuid(), title, description }));
    setTitle("");
    setDescription("");
  };

  const toDelete = (id) => {
    dispatch(deletePost(id));
  };

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

      {newPosts.length > 0 ? (
        newPosts.map((newpost) => (
          <div className="post">
            <div className="bloc">
              <h2 className="title">{newpost.title}</h2>
              <p className="desc">{newpost.description}</p>
            </div>
            <div className="icons">
             <button className="btn">
             <AiFillEdit
                className="editIcon"
                onClick={() => {
                  setEdit(true);
                  setId(newpost.id);
                }}
              />
              
              </button> 
            
             
              {/* <AiFillDelete className="deleteIcon"  onClick={() => dispatch(deletePost(newpost.id))} /> */}
              <button className="btn">  
                  <AiFillDelete
                className="deleteIcon"
                onClick={() => toDelete(newpost.id)}
              />  
                </button>
            
            </div>

            <div className="edit">
              {edit && id == newpost.id && (
                <div className="blocEdit">
                  <input className="titleEdited" 
                  onChange={(e) => setupdatedTitle(e.target.value)}
                  
                  />
                  <textarea 
                  className="descriptionEdited" 
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  
                  />
                  <button className="editedPostBtn"
                  onClick={() => {
                    dispatch(updatePost({
                      id: newpost.id,
                      title: updatedTitle,
                      description: updatedescription



                    }))
                    setEdit(false)
                 
                  }}



                  >
                    submit
                    </button>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1 className="noPosts">there is no posts</h1>
      )}
    </div>
  );
};

export default Posts;
