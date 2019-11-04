import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';
import Project from './Project';

import { fetchPortfolios } from '../../actions/portfolio';
import { connect } from 'react-redux';

const Portfolio = ({ portfolio, fetchPortfolios }) => {
  useEffect(() => {
    fetchPortfolios("5db0f009713473288793f118");
  }, []);

  const { loading, portfolios } = portfolio;
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-projects">
        { loading ? (
          <Spinner />
        ) : (
          <Fragment>
            {
              portfolios.map(project => {
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