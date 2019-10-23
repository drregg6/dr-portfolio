import React, { useEffect } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/layout/Footer';

import setAuthToken from './utils/setAuthToken';
import loadUser from './actions/auth';
import store from './store';

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, [])
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
