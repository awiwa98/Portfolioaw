import React from "react";
import "./BlobAnimation.css";

const BlobAnimation = () => {
  return (
    <div className="blob-wrapper">
      <svg className="blob blob-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          className="blob-path left-path"
          d="M59.6,-58.2C73.3,-42.7,76.3,-21.4,72.3,-3.2C68.3,15,57.3,30,44.6,43.2C32,56.4,17.7,67.7,1.8,67C-14.1,66.3,-28.2,53.6,-41.3,40.2C-54.5,26.7,-66.7,12.3,-68.4,-3.5C-70.2,-19.4,-61.5,-36.7,-47.6,-51.5C-33.8,-66.2,-15.9,-78.4,3.1,-81C22,-83.5,44.1,-76.3,59.6,-58.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg className="blob blob-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          className="blob-path right-path"
          d="M53.6,-56.5C66.3,-42.8,68.8,-21.4,65.1,-3.2C61.4,15,51.4,30,39.2,43.2C27,56.4,13.5,67.7,-1.7,68.4C-16.9,69.1,-33.8,59.1,-48.4,45.4C-63,31.8,-75.3,14.4,-75.6,-3.3C-75.9,-21,-64.2,-38.1,-49.2,-52.2C-34.2,-66.2,-17.1,-77.2,1.3,-78.4C19.6,-79.6,39.3,-70.1,53.6,-56.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default BlobAnimation;








