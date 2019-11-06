import React from 'react';
import PropTypes from 'prop-types';

const About = ({bio}) => {
  return (
    <div className="about">
      <img src="http://placekitten.com/250/250" />
      <p>
        {bio}
      </p>
    </div>
  )
}

About.propTypes = {
  bio: PropTypes.string
}

export default About;
