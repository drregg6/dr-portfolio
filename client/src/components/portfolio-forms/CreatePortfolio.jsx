import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { createPortfolio } from '../../actions/portfolio';

const CreatePortfolio = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: '', year: '', live: '', code: '', image: '', desc: '', technologies: '',
	});
	const { title, year, live, code, image, desc, technologies } = formData;

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createPortfolio(formData, navigate));
		setFormData({ title: '', year: '', live: '', code: '', image: '', desc: '', technologies: '' });
	};

	return (
		<div className="form container">
			<h1>Create a Portfolio Project</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input name="title" value={title} placeholder="Title" className="form-input" type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="year">Year</label>
					<input name="year" placeholder="Year" value={year} className="form-input" type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="live">Live Url</label>
					<input name="live" value={live} placeholder="Live Url" className="form-input" type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="code">Code Url</label>
					<input name="code" value={code} placeholder="Code Url" className="form-input" type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="image">Image</label>
					<input name="image" value={image} placeholder="Image" className="form-input" type="text" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="desc">Description</label>
					<textarea placeholder="Description" name="desc" value={desc} className="form-input textarea" onChange={handleChange}></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="technologies">Technologies</label>
					<input name="technologies" value={technologies} placeholder="Technologies" className="form-input" type="text" onChange={handleChange} />
					<small>Separate each value with a comma(,)</small>
				</div>
				<input className="btn" type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default CreatePortfolio;
