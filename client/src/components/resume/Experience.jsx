import { useSelector, useDispatch } from 'react-redux';
import { deleteExperience } from '../../actions/resume';

const Experience = ({ id, title, year, desc, technologies }) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div key={id} className="experience">
			<div className="experience-header">
				<h1 className="bold">{title}</h1>
				<span className="italic">{year}</span>
			</div>
			<div className="experience-desc">{desc}</div>
			<div className="experience-tech">
				{technologies.map((tech, i) => (
					<span key={i}>{tech}</span>
				))}
			</div>
			{isAuthenticated && (
				<button className="delete-button" onClick={() => dispatch(deleteExperience(id))}>x</button>
			)}
		</div>
	);
};

export default Experience;
