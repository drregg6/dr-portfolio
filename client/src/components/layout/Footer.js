import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

const Footer = ({ isAuthenticated, logout }) => {
  return (
    <div className="footer">
      <h1>&copy;2019 <a href="https://github.com/drregg6" target="_blank" rel="noopener noreferrer">Dave Regg</a></h1>
      { isAuthenticated && (
        <button
          className="btn logout-btn"
          onClick={() => {logout()}}
        >
          Logout
        </button>
      )}
    </div>
  )
}

Footer.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Footer);
