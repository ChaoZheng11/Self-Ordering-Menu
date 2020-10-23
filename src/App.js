import React from 'react';

import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

import Home from './components/Home'

import Details from './components/Details'

import './assets/css/index.css'
import Cart from './components/Cart';


function App() {
  return (
    <Router>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
          
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id" component={Details}></Route>

          <Route path="/cart" component={Cart}></Route>
            
          
          
        </Switch>
      </Router>
  );
}

export default App;
