import { useSelector, useDispatch } from 'react-redux';
import { deleteEducation } from '../../actions/resume';

const formatDate = (dateStr) =>
	new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(dateStr));

const Education = ({ id, school, location, degree, focus, from, to }) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div key={id} className="education">
			<div className="education-dates">
				{formatDate(from)} - {formatDate(to)}
			</div>
			<div className="education-header">
				<h1 className="bold">{school}</h1>
				<span className="italic">{location}</span>
			</div>
			<div className="education-degree">
				{degree} in {focus}
			</div>
			{isAuthenticated && (
				<button className="delete-button" onClick={() => dispatch(deleteEducation(id))}>x</button>
			)}
		</div>
	);
};

export default Education;
