import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import { deleteEmployment } from '../../features/resume/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Employment = ({
  id,
  title,
  company,
  location,
  from,
  to,
  current,
  desc
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="employment">
      <div className="employment-dates">
        <Moment format="MMM YYYY">{from}</Moment> - { current ? 'Current' : <Moment format="MMM YYYY">{to}</Moment> }
      </div>
      <div className="employment-header">
        <h1 className="bold">{title}</h1>
        <span>{company}</span>
        <span className="italic">{location}</span>
      </div>
      <ul className="employment-desc">
        { desc.map((task, i) => {
          return (
            <li key={i}>- {task}</li>
          )
        })}
      </ul>
      {
        user && (
          <button className="delete-button" onClick={() => dispatch(deleteEmployment(id))}>
            x
          </button>
        )
      }
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