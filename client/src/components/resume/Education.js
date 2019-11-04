import React from 'react';
import PropTypes from 'prop-types';

const Education = ({
  id,
  school,
  location,
  degree,
  focus,
  from,
  to
}) => {
  return (
    <div key={id} className="education">
      <h1>{ school } | New Brunswick, NJ</h1>
    </div>
  )
}

Education.propTypes = {
  id: PropTypes.string,
  school: PropTypes.string,
  location: PropTypes.string,
  degree: PropTypes.string,
  focus: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string
}

export default Education;