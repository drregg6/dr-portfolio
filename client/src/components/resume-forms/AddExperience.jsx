import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { createExperience } from '../../actions/resume';

const AddExperience = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: '', year: '', desc: '', technologies: '',
	});
	const { title, year, desc, technologies } = formData;

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createExperience(formData, navigate));
	};

	return (
		<div className="form container">
			<h1>Add to Your Experiences</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input className="form-input" placeholder="Title" name="title" value={title} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="year">Year</label>
					<input className="form-input" placeholder="Year" name="year" value={year} type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="desc">Description</label>
					<textarea placeholder="Description" name="desc" value={desc} className="form-input textarea" onChange={handleChange}></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="technologies">Technologies</label>
					<input className="form-input" placeholder="Technologies" name="technologies" value={technologies} type="text" onChange={handleChange} />
					<small>Separate each value with a comma(,)</small>
				</div>
				<input type="submit" value="Submit" className="btn" />
			</form>
		</div>
	);
};

export default AddExperience;
