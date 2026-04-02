import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { createEmployment } from '../../actions/resume';

const AddEmployment = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: '', company: '', location: '', from: '', to: '', current: false, desc: '',
	});
	const [toDateDisabled, toggleDisabled] = useState(false);
	const { title, company, location, from, to, current, desc } = formData;

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createEmployment(formData, navigate));
	};

	return (
		<div className="form container">
			<h1>Add to Your Employments</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input className="form-input" placeholder="Title" name="title" value={title} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="company">Company</label>
					<input className="form-input" placeholder="Company" name="company" value={company} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input className="form-input" placeholder="Location" name="location" value={location} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="from">From Date</label>
					<input className="form-input" placeholder="From" name="from" value={from} type="date" onChange={handleChange} />
				</div>
				<div className="form-group">
					<input
						value={current}
						checked={current}
						onChange={() => {
							setFormData({ ...formData, current: !current });
							toggleDisabled(!toDateDisabled);
						}}
						type="checkbox"
						name="current"
					/>{' '}
					Current Employer
				</div>
				<div className="form-group">
					<label htmlFor="to">To Date</label>
					<input className="form-input" disabled={toDateDisabled ? 'disabled' : ''} value={to} onChange={handleChange} type="date" name="to" />
				</div>
				<div className="form-group">
					<label htmlFor="desc">Description</label>
					<textarea placeholder="Description" name="desc" value={desc} className="form-input textarea" onChange={handleChange}></textarea>
					<small>Separate values with dashes(-)</small>
				</div>
				<input type="submit" value="Submit" className="btn" />
			</form>
		</div>
	);
};

export default AddEmployment;
