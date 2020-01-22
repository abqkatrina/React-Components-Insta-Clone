import React, {useState} from 'react';

const LikeSection = props => {
  const [likes, setLikes] = useState(props.likes);
  const addLikes = () => {
    setLikes(likes => likes + 1);
  };

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <button onClick={() => addLikes()}><i className="far fa-heart" /></button>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number" >
    {props.likes} {" "}
      likes</p>
</div>
  )
};

export default LikeSection;
