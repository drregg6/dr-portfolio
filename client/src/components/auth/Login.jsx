import { Navigate } from 'react-router';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../actions/auth';

const Login = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const [formData, setFormData] = useState({ email: '', password: '' });
	const { email, password } = formData;

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login(email, password));
	};

	if (isAuthenticated) {
		return <Navigate to="/" />;
	}

	return (
		<div className="form container">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} className="login-form">
				<div className="form-group">
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChange}
						className="form-input"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleChange}
						className="form-input"
					/>
				</div>
				<input type="submit" value="Login" className="btn" />
			</form>
		</div>
	);
};

export default Login;
