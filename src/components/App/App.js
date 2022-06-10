import React from 'react';
import './App.css';
import Home from '../Home/Home';

import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_CATS' })
  })
  return (

    <div className='app'>
      <Router>
        <header>
          <h1>Giphy Search</h1>
          <Link to='/'>Home</Link>
          <br/>
          <Link to="/fav">Favorites</Link>
        </header>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/fav'>
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
