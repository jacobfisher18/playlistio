import React, { Component } from 'react';
import './App.css';

class VideoCard extends Component {
  render() {
    return (
      <div className="VideoCard">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tvTRZJ-4EyI?ecver=1"
          frameborder="0"
          allowfullscreen
        />
      </div>
    );
  }
}

export default VideoCard;
