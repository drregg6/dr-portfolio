import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { createEducation } from '../../actions/resume';

const AddEducation = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		school: '', degree: '', focus: '', location: '', from: '', to: '',
	});
	const { school, degree, focus, location, from, to } = formData;

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createEducation(formData, navigate));
	};

	return (
		<div className="form container">
			<h1>Add an Education</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="school">School</label>
					<input className="form-input" placeholder="School" name="school" value={school} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input className="form-input" placeholder="Location" name="location" value={location} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="degree">Degree</label>
					<input className="form-input" placeholder="Degree" name="degree" value={degree} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="focus">Focus</label>
					<input className="form-input" placeholder="Focus" name="focus" value={focus} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="from">From Date</label>
					<input className="form-input" placeholder="From" name="from" value={from} type="date" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="to">To Date</label>
					<input className="form-input" value={to} onChange={handleChange} type="date" name="to" />
				</div>
				<input type="submit" value="Submit" className="btn" />
			</form>
		</div>
	);
};

export default AddEducation;
