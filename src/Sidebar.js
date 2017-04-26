import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">

        <p>playlistio</p>

        <p className="sidebar-header">Profile</p>
        <p className="sidebar-header">Profile</p>

        <p className="sidebar-header">Music</p>

        <p className="sidebar-header">Playlists</p>
      </div>
    );
  }
}

export default Sidebar;
