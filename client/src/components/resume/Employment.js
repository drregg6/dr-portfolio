import React from 'react';
import Moment from 'react-moment';
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
  current,
  desc
}) => {
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