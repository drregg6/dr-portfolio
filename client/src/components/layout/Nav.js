import { Link } from 'react-router-dom';
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import responsiveNav from '../../utils/responsiveNav';
import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

const Nav = ({
  isAuthenticated,
  fetchResume,
  resume: { resume }
}) => {
  useEffect(() => {
    fetchResume();
  }, [])
  return (
    <div className="nav">
      <div className="nav-toggle">
        <a href="#!" className="nav-icon" onClick={() => responsiveNav()}>
          <i class="fas fa-bars"></i>
        </a>
      </div>
      <div className="nav-link">
      <div>
        <Link to="/">Portfolio</Link>
      </div>
      <div>
        <Link to="/resume">Resume</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      { isAuthenticated && (
        <Fragment>
          <div>
            <Link to="/new-portfolio">New Portfolio</Link>
          </div>
          {
            !resume ? (
              <Fragment>
                <div>
                  <Link to="/new-resume">New Resume</Link>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div>
                  <Link to="/edit-resume">Edit Resume</Link>
                </div>
              </Fragment>
            )
          }
          <div>
            <Link to="new-employment">Add Employer</Link>
          </div>
          <div>
            <Link to="new-experience">Add Experience</Link>
          </div>
          <div>
            <Link to="new-education">Add Education</Link>
          </div>
        </Fragment>
      ) }
      </div>
    </div>
  )
};

Nav.propTypes = {
  isAuthenticated: PropTypes.bool,
  fetchResume: PropTypes.func.isRequired,
  resume: PropTypes.object
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  resume: state.resume
});

export default connect(
  mapStateToProps,
  { fetchResume }
)(Nav);
