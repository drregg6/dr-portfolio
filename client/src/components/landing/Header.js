import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  name
}) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>{name}</h1>
        <h2>Web Developer</h2>
        <div className="header-social">
          <span className="github">Github</span>
          <span className="twitter">Twitter</span>
          <span className="instagram">Instagram</span>
          <span className="mail">Email</span>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header;