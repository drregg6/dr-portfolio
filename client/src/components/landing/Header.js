import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({
  name,
  twitter,
  github,
  instagram
}) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>{name}</h1>
        <h2>Web Developer</h2>
        <div className="header-social">
          <a href={github} target="_blank" className="social-icon">
            <i class="fab fa-github"></i>
          </a>
          <a href={twitter} target="_blank" className="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href={instagram} target="_blank" className="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <Link to="/contact" className="social-icon">
            <i class="far fa-paper-plane"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired
}

export default Header;