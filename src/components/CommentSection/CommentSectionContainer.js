// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, addComment] = useState(0);
 {/* map through the comments data and return the Comment component */}

props.data.map( item => {
  const comment = item.comments;
  return comment;
})

  return (
    <div>
      <CommentInput  />
    </div>
  );
};

export default CommentSection;
