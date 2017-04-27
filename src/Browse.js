import React, { Component } from 'react';
import VideoCard from './VideoCard';
import './App.css';

class Browse extends Component {
  render() {
    return (
      <div className="Browse">
        <h1>Browse</h1>
        <VideoCard title="Humble" artists="Kendrick Lamar" views="1,249,028" src="https://www.youtube.com/embed/tvTRZJ-4EyI?ecver=1"/>
        <VideoCard title="The Less I Know the Better" artists="Tame Impala" views="735,195" src="https://www.youtube.com/embed/sBzrzS1Ag_g"/>
        <VideoCard title="Alone" artists="Marshmallow" views="3,511,907" src="https://www.youtube.com/embed/YnwsMEabmSo"/>
      </div>
    );
  }
}

export default Browse;
