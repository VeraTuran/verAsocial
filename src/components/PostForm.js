import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && content){
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0,
      };

      dispatch(addPost(data));
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={e=> handleForm(e)}>
        <input 
          type="text" 
          placeholder="title me" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="post me"
          value= {content} 
          onChange={(e) => setContent(e.target)}
        ></textarea>
        <input type="submit" value="send me" />
      </form>
    </div>
  ); 
};

export default PostForm;
