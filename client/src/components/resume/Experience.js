import React from 'react';
import PropTypes from 'prop-types';

import { deleteExperience } from '../../actions/resume';
import { connect } from 'react-redux';

const Experience = ({
  deleteExperience,
  isAuthenticated,
  id,
  title,
  year,
  desc,
  technologies
}) => {
  return (
    <div key={id} className="experience">
      <h1>{ title } | { year }</h1>
      {
        isAuthenticated && (
          <button className="delete-button" onClick={() => deleteExperience(id)}>
            x
          </button>
        )
      }
    </div>
  )
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  desc: PropTypes.string,
  technologies: PropTypes.array
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { deleteExperience }
)(Experience);