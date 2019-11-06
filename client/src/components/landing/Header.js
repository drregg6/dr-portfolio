import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  name,
  twitter,
  linkedin,
  github,
  instagram
}) => {
  return (
    <div className="header">
      <div className="header-content secondary-color">
        <h1>{name}</h1>
        <h2>Web Developer</h2>
        <div className="header-social">
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer"  className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer"  className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer"  className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string
}

export default Header;