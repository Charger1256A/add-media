import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Registration from './Registration';
import Home from './Home';
import fire from './firebase';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListner();
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null })
      }
    });
  }

  render () {
    return (
      <div>
        {this.state.user ? (<Home />) : (<Registration />)}
        
      </div>
  
    );
  }
}

// function App() {

  
// }

export default App;
