import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import { deleteEducation } from '../../features/resume/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Education = ({
  id,
  school,
  location,
  degree,
  focus,
  from,
  to
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div key={id} className="education">
      <div className="education-dates">
        <Moment format="MMM YYYY">{from}</Moment> - <Moment format="MMM YYYY">{to}</Moment>
      </div>
      <div className="education-header">
        <h1 className="bold">{school}</h1>
        <span className="italic">{location}</span>
      </div>
      <div className="education-degree">
        {degree} in {focus}
      </div>
      {
        user && (
          <button className="delete-button" onClick={() => dispatch(deleteEducation(id))}>x</button>
        )
      }
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