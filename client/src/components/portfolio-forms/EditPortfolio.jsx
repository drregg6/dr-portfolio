import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { fetchPort, createPortfolio } from '../../actions/portfolio';

const EditPortfolio = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { loading, editPort } = useSelector((state) => state.portfolio);

	const [formData, setFormData] = useState({
		title: '', live: '', code: '', image: '', desc: '', year: '', technologies: '',
	});
	const { title, year, live, code, image, desc, technologies } = formData;

	useEffect(() => {
		dispatch(fetchPort(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (editPort) {
			setFormData({
				title: loading || !editPort.title ? '' : editPort.title,
				year: loading || !editPort.year ? '' : editPort.year,
				live: loading || !editPort.live ? '' : editPort.live,
				code: loading || !editPort.code ? '' : editPort.code,
				image: loading || !editPort.image ? '' : editPort.image,
				desc: loading || !editPort.desc ? '' : editPort.desc,
				technologies: loading || !editPort.technologies ? '' : editPort.technologies.join(','),
			});
		}
	}, [editPort, loading]);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createPortfolio(formData, navigate, id, true));
		setFormData({ title: '', year: '', live: '', code: '', image: '', desc: '', technologies: '' });
	};

	return (
		<div>
			<div className="form container">
				<h1>Edit {title}</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input name="title" placeholder="Title" value={title} className="form-input" type="text" onChange={handleChange} />
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
						<input name="image" placeholder="Image" value={image} className="form-input" type="text" onChange={handleChange} />
					</div>
					<div className="form-group">
						<label htmlFor="desc">Description</label>
						<textarea placeholder="Description" name="desc" value={desc} className="form-input textarea" onChange={handleChange}></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="technologies">Technologies</label>
						<input name="technologies" placeholder="Technologies" value={technologies} className="form-input" type="text" onChange={handleChange} />
						<small>Separate each value with a comma(,)</small>
					</div>
					<input type="submit" value="Submit" className="btn" />
				</form>
			</div>
		</div>
	);
};

export default EditPortfolio;
