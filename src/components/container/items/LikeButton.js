import React, { useState, useEffect } from "react";

const LikeButton = ({ like }) => {
  const [likes, updateLikes] = useState(like);

  return (
    <button onClick={() => updateLikes(!likes)}>
      <i className={"fa-heart " + (likes ? "fas" : "far")}></i>
    </button>
  );
};

export default LikeButton;
