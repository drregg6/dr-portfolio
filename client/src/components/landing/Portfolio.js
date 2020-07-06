import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

// Reusable and child components
import Spinner from '../layout/Spinner';
import Project from './Project';

// Redux tools
import { fetchPortfolios } from '../../actions/portfolio';
import { connect } from 'react-redux';

const Portfolio = ({ portfolio, fetchPortfolios }) => {
  // Grab users portfolio, in this case the only Port that exists
  useEffect(() => {
    fetchPortfolios("5dc3685ea9b5b7107dec9315");
  }, []);

  /*
    Check for loading
    if
      loading, show Spinner
    else
      populate data
  */
  const { loading, portfolios } = portfolio;
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-projects">
        { loading || !portfolios ? (
          <Spinner />
        ) : (
          <Fragment>
            {/* only the first six portfolio projects will populate */}
            {
              portfolios.slice(0,6).map(project => {
                return <Project
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
              })
            }
          </Fragment>
        ) }
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  fetchPortfolios: PropTypes.func.isRequired,
  portfolio: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchPortfolios }
)(Portfolio);