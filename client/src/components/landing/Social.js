import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

const Social = ({
  fetchResume,
  resume: { loading, resume }
}) => {
  useEffect(() => {
    fetchResume();
  }, []);
  const { social } = resume;
  return (
    <div className="social center">
      { loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="social-component-icons">
            <a href={social.github} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href={social.twitter} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <Link to="/contact" className="social-component-icon">
              <i className="far fa-paper-plane"></i>
            </Link>
          </div>
        </Fragment>
      ) }
    </div>
  )
}

Social.propTypes = {
  fetchResume: PropTypes.func.isRequired,
  resume: PropTypes.object
}

const mapStateToProps = state => ({
  resume: state.resume
});

export default connect(
  mapStateToProps,
  { fetchResume }
)(Social);