import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

import { fetchUserPorts } from '../../actions/portfolio';
import { connect } from 'react-redux';

const Portfolio = ({ portfolio, fetchUserPorts }) => {
  useEffect(() => {
    fetchUserPorts("5db0f009713473288793f118");
  }, [fetchUserPorts]);

  const { loading, userPortfolios } = portfolio;
  return (
    <div className="portfolio">
      { loading ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <h1>My Portfolio</h1>
          {
            userPortfolios.map(project => {
              return <Project
                id={project._id}
                title={project.title}
                url={project.url}
                desc={project.desc}
                image={project.image}
                technologies={project.technologies}
              />
            })
          }
        </Fragment>
      ) }
    </div>
  )
}

Portfolio.propTypes = {
  fetchUserPorts: PropTypes.func.isRequired,
  portfolio: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchUserPorts }
)(Portfolio);