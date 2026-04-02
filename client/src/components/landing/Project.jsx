import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { deletePortfolio } from '../../actions/portfolio';

const Project = ({ id, title, year, live, code, image, desc, technologies }) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const img = image || 'http://www.placehold.it/250x250';

	return (
		<div className="portfolio-project">
			<div
				className="project-img"
				style={{ backgroundImage: `url(${img})`, width: 250, height: 'auto', backgroundSize: 'cover' }}
			>
				<img src={img} style={{ visibility: 'hidden' }} alt={title} />
				<a rel="noopener noreferrer" href={live} target="_blank" className="btn img-btn live">Live</a>
				<a rel="noopener noreferrer" href={code} target="_blank" className="btn img-btn code">Code</a>
			</div>
			<div className="project-info">
				<div className="project-header">
					<h1>
						<a className="project-title" href={live} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					</h1>
					<span>{!year ? '2019' : year}</span>
				</div>
				<div className="project-desc">
					<p>{desc}</p>
				</div>
				<div className="project-techs">
					{technologies.map((tech, i) => (
						<div className="project-tech" key={i}>{tech}</div>
					))}
				</div>
			</div>
			{isAuthenticated && (
				<button className="delete-button" onClick={() => dispatch(deletePortfolio(id))}>x</button>
			)}
			{isAuthenticated && (
				<Link className="edit-portfolio" to={`/portfolios/${id}/edit`}>Edit</Link>
			)}
		</div>
	);
};

export default Project;
