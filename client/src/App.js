/*

=== EXAMPLES ===
https://www.juniordevelopercentral.com/16-junior-web-developer-portfolio-examples/
http://raymond-jay.herokuapp.com/
http://www.georgiemcdaniel.uk
https://juliaryan.io/
https://dean451.github.io/

=== TODOS ===
- Resume should change to CV
- Work on design
    - Start with forms
    - Color scheme
    - Effects
- README.md
- Error messages
- Contact form and sending to my email
- Resume design (or PDF version?)

*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Homepage from './components/landing/Homepage';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Login from './components/auth/Login';

import CreatePortfolio from './components/portfolio-forms/CreatePortfolio';
import EditPortfolio from './components/portfolio-forms/EditPortfolio';
import AddEmployment from './components/resume-forms/AddEmployment';
import AddExperience from './components/resume-forms/AddExperience';
import AddEducation from './components/resume-forms/AddEducation';
import CreateResume from './components/resume-forms/CreateResume';
import EditResume from './components/resume-forms/EditResume';
import PrivateRoute from './components/routing/PrivateRoute';

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
        <Nav />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/new-portfolio' component={CreatePortfolio} />
          <PrivateRoute path='/portfolios/:id/edit' component={EditPortfolio} />
          <PrivateRoute path='/new-resume' component={CreateResume} />
          <PrivateRoute path='/edit-resume' component={EditResume} />
          <PrivateRoute path='/new-experience' component={AddExperience} />
          <PrivateRoute path='/new-employment' component={AddEmployment} />
          <PrivateRoute path='/new-education' component={AddEducation} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
