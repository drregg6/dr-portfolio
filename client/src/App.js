import React from 'react';
import './App.css';

import Header from './components/layout/Header';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
