import React from 'react';

import Home from '../Home/Home';
import {HashRouter as Router, Route, Navlink} from 'react-router-dom';
import Favorites from '../Favorites/Favorites';

function App(props) {
  return (
    
    <div className='app'>
    <Home/> 
    <h1>Giphy Search!</h1>
  
  
    </div>
    
  );
}

export default App;
