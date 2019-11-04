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
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  desc: PropTypes.string,
  technologies: PropTypes.array
}

export default Experience;