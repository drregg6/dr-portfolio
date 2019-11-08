import React from 'react';
import PropTypes from 'prop-types';

const About = ({bio}) => {
  return (
    <div className="about">
      <img src="https://gdurl.com/tKXk" alt="Dave Regg" />
      <p className="p-blurb">
        {bio ? bio : 'Hello world!'}
      </p>
    </div>
  )
}

About.propTypes = {
  bio: PropTypes.string
}

export default About;
