import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { fetchPortfolios } from '../../actions/portfolio';
import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import Header from './Header';
import About from './About';
import Logos from './Logos';
import Portfolio from './Portfolio';
import Social from './Social';

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
    fetchPortfolios("5dc36bd460f321113e814551");
    fetchResume();
  }, [])
  return (
    <div className="content container">
      { loading || !resume ? (
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
          <About
            bio={resume.bio}
          />
          <Logos />
          <Portfolio />
          <Social />
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
