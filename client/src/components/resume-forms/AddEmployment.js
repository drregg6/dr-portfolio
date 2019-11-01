import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createEmployment } from '../../actions/resume';
import { connect } from 'react-redux';

const AddEmployment = ({
  createEmployment,
  history
}) => {
  const [ formData, setFormData ] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    desc: ''
  });

  const [ toDateDisabled, toggleDisabled ] = useState(false);
  const {
    title,
    company,
    location,
    from,
    to,
    current,
    desc
  } = formData;

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // Send formData
    createEmployment(formData, history);

    // Reset formData
  }
  return (
    <div className="form container">
      <h1>Add to Your Employments</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-input"
            placeholder="Title"
            name="title"
            value={title}
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            className="form-input"
            placeholder="Company"
            name="company"
            value={company}
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-input"
            placeholder="Location"
            name="location"
            value={location}
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From Date</label>
          <input
            className="form-input"
            placeholder="From"
            name="from"
            value={from}
            type="date"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <input
            value={current}
            checked={current}
            onChange={
              () => {
                setFormData({...formData, current: !current}); toggleDisabled(!toDateDisabled);
              }
            }
            type="checkbox"
            name="current"
          />
          {' '}Current Employer
        </div>
        <div className="form-group">
          <label htmlFor="to">To Date</label>
          <input
            className="form-input"
            disabled={toDateDisabled ? 'disabled' : ''}
            value={to}
            onChange={event => handleChange(event)}
            type="date"
            name="to"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            className="form-input"
            placeholder="Description"
            name="desc"
            value={desc}
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn"
        />
      </form>
    </div>
  )
}

AddEmployment.propTypes = {
  createEmployment: PropTypes.func.isRequired
}

export default connect(
  null,
  { createEmployment }
)(AddEmployment);
