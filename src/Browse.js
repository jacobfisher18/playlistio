import React, { Component } from 'react';
import VideoCard from './VideoCard';
import './App.css';

class Browse extends Component {
  render() {
    return (
      <div className="Browse">
        <VideoCard />
      </div>
    );
  }
}

export default Browse;
