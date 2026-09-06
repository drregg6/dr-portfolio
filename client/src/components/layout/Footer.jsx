import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';

const Footer = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div className="footer">
			<div className="footer-top">
				<h1>
					&copy;{new Date().getFullYear()}{' '}
					<a
						href="https://github.com/drregg6"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dave Regg
					</a>
				</h1>
				{isAuthenticated && (
					<button
						className="btn logout-btn"
						onClick={() => dispatch(logout())}
					>
						Logout
					</button>
				)}
			</div>
			<p>
				Thanks{' '}
				<a
					href="https://unsplash.com/@actionvance"
					target="_blank"
					rel="noopener noreferrer"
				>
					ActionVance
				</a>{' '}
				for the header image!
			</p>
		</div>
	);
};

export default Footer;
