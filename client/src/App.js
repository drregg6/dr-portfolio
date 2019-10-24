/*

USER_LOGIN
redirects to /

then
AUTH_ERROR

problem in 
setAuthToken(?)
or
loadUser()(?)

*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';

import Portfolio from './components/portfolio/Portfolio';
import Login from './components/auth/Login';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import store from './store';

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Alert />
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
