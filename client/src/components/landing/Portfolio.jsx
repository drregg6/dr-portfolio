import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../layout/Spinner';
import Project from './Project';

import { fetchUsers } from '../../actions/portfolio';

const Portfolio = () => {
	const dispatch = useDispatch();
	const { loading, users } = useSelector((state) => state.portfolio);
	const portfolios = users[0]?.portfolios ?? [];

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div className="portfolio" id="portfolio">
			<div className="portfolio-projects">
				{loading ? (
					<Spinner />
				) : (
					<Fragment>
						{portfolios.slice(0, 6).map((project) => (
							<Project
								key={project._id}
								id={project._id}
								title={project.title}
								year={project.year}
								live={project.live}
								code={project.code}
								desc={project.desc}
								image={project.image}
								technologies={project.technologies}
							/>
						))}
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default Portfolio;
