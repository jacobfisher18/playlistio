import React, { Component } from 'react';
import './App.css';

class VideoCard extends Component {
  render() {
    return (
      <div className="VideoCard">
        <iframe src={this.props.src}/>
        <p className="videoCard-title">{this.props.title}</p>
        <p className="videoCard-artist">{this.props.artists}</p>
        <p className="videoCard-views">{this.props.views} views</p>
      </div>
    );
  }
}

export default VideoCard;
