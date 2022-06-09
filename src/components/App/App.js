import React from 'react';

import Home from '../Home/Home';
import {HashRouter as Router, Route, Navlink} from 'react-router-dom';

function App(props) {
  return (
    <div className='app'>
    <Home/> 
    <h1>Giphy Search!</h1>
  
    </div>
  );
}

export default App;
