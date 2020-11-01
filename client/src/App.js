import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

// nav
import Navbar from './components/shared/Navbar';

// auth
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';

// home
import Home from './components/home/Home';

// profile
import Profile from './components/profile/Profile';

//feed
import Feed from './components/feed/Feed';

const App = () => (
    <>
      <Navbar />
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/feed' component={Feed} />
        </Switch>
      </FetchUser>
    </>
)

export default App;
