import React from 'react';
import PropTypes from 'prop-types';

import { deleteEmployment } from '../../actions/resume';
import { connect } from 'react-redux';

const Employment = ({
  isAuthenticated,
  deleteEmployment,
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
      {
        isAuthenticated && (
          <button className="delete-button" onClick={() => deleteEmployment(id)}>
            x
          </button>
        )
      }
    </div>
  )
}

Employment.propTypes = {
  isAuthenticated: PropTypes.bool,
  deleteEmployment: PropTypes.func.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  desc: PropTypes.array
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { deleteEmployment }
)(Employment);