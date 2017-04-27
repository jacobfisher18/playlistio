import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Browse from './Browse';
import './App.css';

let user = {
  email: "jacobfisher18@gmail.com",
  playlists: [
    {
      name: "Summer Party",
      videos: [
        {
          title: "Humble",
          artists: "Kendrick Lamar",
          url: "http://temp.com"
        },
        {
          title: "The Less I Know the Better",
          artists: "Tame Impala",
          url: "http://temp.com"
        }
      ]
    },
    {
      name: "Hip-Hop",
      videos: [
        {
          title: "Humble",
          artists: "Kendrick Lamar",
          url: "http://temp.com"
        },
        {
          title: "The Less I Know the Better",
          artists: "Tame Impala",
          url: "http://temp.com"
        }
      ]
    }
  ]
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSection: "Browse"
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar playlists={user.playlists} currentSection={this.state.currentSection}/>
        <Browse />
      </div>
    );
  }
}

export default App;
