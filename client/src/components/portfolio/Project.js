import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, url, image, desc, technologies }) => {
  return (
    <div>
      <h1>{ title }</h1>
      
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  technologies: PropTypes.array
}

export default Project;
