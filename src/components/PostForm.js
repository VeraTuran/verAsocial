import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);

  const handleForm = (e) => {
    e.preventDefault();

    if (title && content){
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0,
      };
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
