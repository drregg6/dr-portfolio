import React from 'react';
import PropTypes from 'prop-types';

import { deleteEducation } from '../../actions/resume';
import { connect } from 'react-redux';

const Education = ({
  deleteEducation,
  isAuthenticated,
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
      {
        isAuthenticated && (
          <button className="delete-button" onClick={() => deleteEducation(id)}>x</button>
        )
      }
    </div>
  )
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  id: PropTypes.string,
  school: PropTypes.string,
  location: PropTypes.string,
  degree: PropTypes.string,
  focus: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { deleteEducation }
)(Education);