import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import GasListing from './components/GasListing';
import GasLevels from './components/GasLevels';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul className="nav-bar">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/gas-levels">Gas Levels Page (protected)</Link>
          </li>
        </ul> */}
        <NavBar />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={GasListing} />
        <PrivateRoute exact path="/gas-levels" component={GasLevels} />
      </div>
    </Router>
  );
}

export default App;
