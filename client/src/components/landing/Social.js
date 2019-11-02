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
    <div className="social">
      { loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="header-social">
            <a href={social.github} target="_blank" className="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a href={social.twitter} target="_blank" className="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href={social.instagram} target="_blank" className="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <Link to="/contact" className="social-icon">
              <i class="far fa-paper-plane"></i>
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