import { Link } from 'react-router-dom';
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import responsiveNav from '../../utils/responsiveNav';
import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

import Alert from './Alert';

const Nav = ({
  isAuthenticated,
  fetchResume,
  resume: { loading, resume }
}) => {
  useEffect(() => {
    fetchResume();
  }, [])
  return (
    <div className="nav top-nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          { isAuthenticated && (
            <Fragment>
              <li>
                <Link to="/new-portfolio">New Portfolio</Link>
              </li>
              {
                !resume ? (
                  <Fragment>
                    <li>
                      <Link to="/new-resume">New Resume</Link>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li>
                      <Link to="/edit-resume">Edit Resume</Link>
                    </li>
                  </Fragment>
                )
              }
              <li>
                <Link to="new-employment">Add Employer</Link>
              </li>
              <li>
                <Link to="new-experience">Add Experience</Link>
              </li>
              <li>
                <Link to="new-education">Add Education</Link>
              </li>
            </Fragment>
          ) }
        </ul>
      </nav>
      <a href="#" className="nav-icon" onClick={() => responsiveNav()}>
        <i className="fa fa-bars"></i>
      </a>
      <Alert />
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
