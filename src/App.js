import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from "./components/Utils";
import Post from "./components/Post"

const App = () => {
  const posts = useSelector ((state) => state.postReducer);
  console.log(posts);


  return (
    <div>
      <h1>Shout into the void</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) && posts.map((post, index) => (
          <Post post={post} key = {index}/>
          ))}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
