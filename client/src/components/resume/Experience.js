import React from 'react';
import PropTypes from 'prop-types';

import { deleteExperience } from '../../features/resume/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Experience = ({
  id,
  title,
  year,
  desc,
  technologies
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
        user && (
          <button className="delete-button" onClick={() => dispatch(deleteExperience(id))}>
            x
          </button>
        )
      }
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