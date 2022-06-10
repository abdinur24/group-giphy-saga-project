import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <div className='app'>
      <Router>
        <header>
          <h1>Giphy Search</h1>
          <Link to="/fav">Favorites</Link>
        </header>
        <Home />
        <Route path='/fav'>
          <Favorites/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
