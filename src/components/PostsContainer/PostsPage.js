//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {

  console.log('PostsPage', props)

  return (
    <div className="posts-container-wrapper">
  {  props.data.map((it) => <Post key={it.username} data={it}/> )}
     
    </div>
  );
};

export default PostsPage;

