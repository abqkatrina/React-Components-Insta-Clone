// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, addComment] = useState(props.comments);

 {/* map through the comments data and return the Comment component */}


  return (
    <div>
      { comments.map((it) => <Comment key={it.username} comment={it}/> )}
      <CommentInput  />
    </div>
  );
};

export default CommentSection;
