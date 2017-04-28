import React, { Component } from 'react';
import './App.css';

//images
import profile from "./img/profile.png";
import explore from "./img/explore.png";
import popular from "./img/popular.png";
import radio from "./img/radio.png";
import playlist from "./img/playlist.png";

class Sidebar extends Component {

  getPlaylists() {

    const playlists = this.props.playlists.map((item) =>
      <p className="sidebar-item" onClick={this.props.changeSection.bind(this, "Playlist")}>
        <img className="sidebar-img" src={playlist} alt="playlist"/>
        {item.name}
      </p>
    );

    return playlists;
  }

  render() {
    return (
      <div className="Sidebar">

        <p className="logo">playlistio</p>

        <p className="sidebar-header">Profile</p>
        <p className="sidebar-item" onClick={this.props.changeSection.bind(this, "Profile")}><img className="sidebar-img" src={profile} alt="profile"/>jacobfisher18@gmail.com</p>

        <p className="sidebar-header">Music</p>
        <p className="sidebar-item" onClick={this.props.changeSection.bind(this, "Explore")}><img className="sidebar-img" src={explore} alt="explore"/>Explore</p>
        <p className="sidebar-item" onClick={this.props.changeSection.bind(this, "Popular")}><img className="sidebar-img" src={popular} alt="popular"/>Popular</p>
        <p className="sidebar-item" onClick={this.props.changeSection.bind(this, "Radio")}><img className="sidebar-img" src={radio} alt="radio"/>Radio</p>

        <p className="sidebar-header">Playlists</p>
        {this.getPlaylists()}
      </div>
    );
  }
}

export default Sidebar;
