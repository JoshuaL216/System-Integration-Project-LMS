import React from 'react';
import ReactPlayer from "react-player";
import './Video.css'
 
function Video() {
  return (
    <div className="Video">
      <header className="Video-header">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=HSSfQwtHY0Q" controls={true}
        fluid={false}
        width={620}
        height={400}
      />
      </header>
    </div>
  );
}
 
export default Video;