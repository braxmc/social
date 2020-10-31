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

const App = () => (
    <>
      <Navbar />
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </FetchUser>
    </>
)

export default App;
