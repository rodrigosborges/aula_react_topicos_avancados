import React from 'react';
import './App.css';
import Posts from './Components/Posts.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <Router>
        <Route path="/" exact component={Posts} />
      </Router>
    )
  }
}

export default App;
