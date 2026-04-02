import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';

import { fetchResume } from '../../actions/resume';

const Social = () => {
	const dispatch = useDispatch();
	const { loading, resume } = useSelector((state) => state.resume);

	useEffect(() => {
		dispatch(fetchResume());
	}, [dispatch]);

	const social = resume?.social;
	return (
		<div className="social center pattern-background content-break">
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className="social-component-icons">
						<a
							href={social ? social.github : 'https://github.com'}
							target="_blank"
							rel="noopener noreferrer"
							className="social-component-icon"
						>
							<i className="fab fa-github"></i>
						</a>
						<a
							href={social ? social.twitter : 'https://twitter.com'}
							target="_blank"
							rel="noopener noreferrer"
							className="social-component-icon"
						>
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href={social ? social.instagram : 'https://instagram.com'}
							target="_blank"
							rel="noopener noreferrer"
							className="social-component-icon"
						>
							<i className="fab fa-instagram"></i>
						</a>
						<a
							href={social ? social.linkedin : 'https://linkedin.com'}
							target="_blank"
							rel="noopener noreferrer"
							className="social-component-icon"
						>
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default Social;
