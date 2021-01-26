import React, { useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/auth/check', { withCredentials: true })
      .then(() => console.log('success'))
      .catch(() => console.error('error'));
  }, []);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" render={() => <h1>Welcome</h1>} />
      </Switch>
    </div>
  );
}

export default App;
