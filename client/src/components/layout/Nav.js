import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Nav = ({ isAuthenticated }) => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">Portfolio</Link>
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
              <li>
                <Link to="/new-resume">New Resume</Link>
              </li>
            </Fragment>
          ) }
        </ul>
      </nav>
    </div>
  )
};

Nav.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
)(Nav);
