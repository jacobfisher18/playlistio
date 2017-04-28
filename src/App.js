import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Explore from './Explore';
import Popular from './Popular';
import ComingSoon from './ComingSoon';
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
      currentSection: "Explore"
    };
  }

  renderCurrentSection() {
    if (this.state.currentSection === "Explore") {
      return <Explore />;
    }

    else if (this.state.currentSection === "Popular") {
      return <Popular />;
    }

    else {
      return <ComingSoon />;
    }
  }

  changeSection(newSection) {
    this.setState({
      currentSection: newSection
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar playlists={user.playlists} currentSection={this.state.currentSection} changeSection={this.changeSection.bind(this)}/>
        {this.renderCurrentSection()}
      </div>
    );
  }
}

export default App;
