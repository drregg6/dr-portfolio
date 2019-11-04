import React from 'react';
import PropTypes from 'prop-types';

const Employment = ({
  id,
  title,
  company,
  location,
  from,
  to,
  desc
}) => {
  return (
    <div key={id} className="employment">
      <h1>{ title } | { company }</h1>
    </div>
  )
}

Employment.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default Employment;