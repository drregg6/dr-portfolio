import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployment } from '../../actions/resume';

const formatDate = (dateStr) =>
	new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(dateStr));

const Employment = ({ id, title, company, location, from, to, current, desc }) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div className="employment">
			<div className="employment-dates">
				{formatDate(from)} -{' '}
				{current ? 'Current' : formatDate(to)}
			</div>
			<div className="employment-header">
				<h1 className="bold">{title}</h1>
				<span>{company}</span>
				<span className="italic">{location}</span>
			</div>
			<ul className="employment-desc">
				{desc.map((task, i) => (
					<li key={i}>- {task}</li>
				))}
			</ul>
			{isAuthenticated && (
				<button className="delete-button" onClick={() => dispatch(deleteEmployment(id))}>x</button>
			)}
		</div>
	);
};

export default Employment;
