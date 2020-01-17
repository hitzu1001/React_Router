import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import tiger from "./images/tiger.jpg";
import hazel from "./images/hazel.jpg";
import princess from "./images/princess.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    cats: [
      {
        name: "Tiger",
        age: 5,
        src: tiger,
        facts: [
          "Tiger loves eating treats.",
          "Tiger is a terrible sleepy cat.",
          "Tiger wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves toys more than humans."
        ]
      },
      {
        name: "Princess",
        age: 4,
        src: princess,
        facts: [
          "Princess is an elegant cat and the best room-mate.",
          "Princess likes walk and bath.",
          "Princess can look out of the window all day."
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar cats={this.props.cats} />
        <div className="container">
          <Routes cats={this.props.cats} />
        </div>
      </div>
    )
  }
}

export default App;
