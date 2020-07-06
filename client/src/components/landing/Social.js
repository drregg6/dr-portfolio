import React, { useEffect, Fragment } from 'react';
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
  }, [fetchResume]);
  const { social } = resume;
  return (
    <div className="social center pattern-background content-break">
      { loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="social-component-icons">
            <a href={social ? social.github : 'https://github.com'} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href={social ? social.twitter : 'https://twitter.com'} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={social ? social.instagram : 'https://instagram.com'} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={social ? social.linkedin : 'https://linkedin.com'} target="_blank" rel="noopener noreferrer"  className="social-component-icon">
              <i className="fab fa-linkedin"></i>
            </a>
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