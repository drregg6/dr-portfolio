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
      <div className="experience-header">
        <h1 className="bold">{ title }</h1>
        <span className="italic">{year}</span>
      </div>
      <div className="experience-desc">
        {desc}
      </div>
      <div className="experience-tech">
        { technologies.map((tech, i) => {
          return (
            <span key={i}>{tech}</span>
          )
        })}
      </div>
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