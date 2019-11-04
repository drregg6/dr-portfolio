import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({
  id,
  title,
  year,
  desc,
  technologies
}) => {
  return (
    <div key={id} className="experience">
      <h1>{ title } | { year }</h1>
    </div>
  )
}

Experience.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired
}

export default Experience;