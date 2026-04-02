/*

=== EXAMPLES ===
https://www.juniordevelopercentral.com/16-junior-web-developer-portfolio-examples/
http://raymond-jay.herokuapp.com/
http://www.georgiemcdaniel.uk
https://juliaryan.io/
https://dean451.github.io/

=== TODOS ===

=== BUGS ===
- EditProject will not populate inputs until it's refreshed

*/
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { useEffect } from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import Alert from './components/layout/Alert';
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
				<Alert />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/new-portfolio"
						render={() => (
							<PrivateRoute>
								<CreatePortfolio />
							</PrivateRoute>
						)}
					/>
					<Route
						path="/portfolios/:id/edit"
						render={() => (
							<PrivateRoute>
								<EditPortfolio />
							</PrivateRoute>
						)}
					/>
					<Route
						path="/new-resume"
						render={() => (
							<PrivateRoute>
								<CreateResume />
							</PrivateRoute>
						)}
					/>
					<Route
						path="/new-education"
						render={() => (
							<PrivateRoute>
								<AddEducation />
							</PrivateRoute>
						)}
					/>
					<Route
						path="/new-employment"
						render={() => (
							<PrivateRoute>
								<AddEmployment />
							</PrivateRoute>
						)}
					/>
					<Route
						path="/new-experience"
						render={() => (
							<PrivateRoute>
								<AddExperience />
							</PrivateRoute>
						)}
					/>
					<Route
						path="/edit-resume"
						render={() => (
							<PrivateRoute>
								<EditResume />
							</PrivateRoute>
						)}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
