import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { fetchPortfolios } from '../../actions/portfolio';
import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';

const Homepage = ({
  fetchPortfolios,
  fetchResume,
  portfolio: {
    portfolios
  },
  resume: {
    loading,
    resume
  },
  isAuthenticated
}) => {
  useEffect(() => {
    fetchPortfolios("5db0f009713473288793f118");
    fetchResume();
  }, [])
  return (
    <div className="content">
      { loading ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <Header
            name={resume.name}
          />
          <About />
          <Portfolio />
        </Fragment>
      )}
    </div>
  )
}

Homepage.propTypes = {
  fetchPortfolios: PropTypes.func.isRequired,
  fetchResume: PropTypes.func.isRequired,
  portfolio: PropTypes.object,
  resume: PropTypes.object,
  auth: PropTypes.bool
}

const mapStateToProps = state => ({
  portfolio: state.portfolio,
  resume: state.resume,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { fetchPortfolios, fetchResume }
)(Homepage);
