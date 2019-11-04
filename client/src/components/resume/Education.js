import React from 'react';
import PropTypes from 'prop-types';

const Education = ({
  id,
  school,
  degree,
  from,
  to,
  desc
}) => {
  return (
    <div key={id} className="education">
      <h1>{ school } | New Brunswick, NJ</h1>
    </div>
  )
}

Education.propTypes = {
  id: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Education;