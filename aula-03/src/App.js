import React from 'react';
import './App.css';
import Converter from './screens/Converter.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <Router>
        <Route path="/" exact component={Converter} />
      </Router>
    )
  }
}

export default App;
