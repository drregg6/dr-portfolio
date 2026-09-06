import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPortfolios } from '../../actions/portfolio';
import { fetchResume } from '../../actions/resume';

import Spinner from '../layout/Spinner';
import Header from './Header';
import About from './About';
import Logos from './Logos';
import Portfolio from './Portfolio';
import Social from './Social';

const Homepage = () => {
	const dispatch = useDispatch();
	const { loading, resume } = useSelector((state) => state.resume);

	useEffect(() => {
		dispatch(fetchPortfolios('5dc36bd460f321113e814551'));
		dispatch(fetchResume());
	}, [dispatch]);

	return (
		<div className="content container">
			{loading || !resume ? (
				<Spinner />
			) : (
				<Fragment>
					<Header
						name={resume.name}
						linkedin={resume.social.linkedin}
						twitter={resume.social.twitter}
						github={resume.social.github}
						instagram={resume.social.instagram}
					/>
					<About bio={resume.bio} />
					<Logos />
					<Portfolio />
					<Social />
				</Fragment>
			)}
		</div>
	);
};

export default Homepage;
