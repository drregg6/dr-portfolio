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
  id: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  desc: PropTypes.array
}

export default Employment;