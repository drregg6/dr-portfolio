import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createEducation } from '../../actions/resume';
import { connect } from 'react-redux';

const AddEducation = ({ createEducation, history }) => {
  const [ formData, setFormData ] = useState({
    school: '',
    degree: '',
    focus: '',
    location: '',
    from: '',
    to: ''
  });

  const {
    school,
    degree,
    focus,
    location,
    from,
    to
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
    createEducation(formData, history);
  }
  return (
    <div className="form container">
      <h1>Add an Education</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input
            className="form-input"
            placeholder="School"
            name="school"
            value={school}
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
          <label htmlFor="degree">Degree</label>
          <input
            className="form-input"
            placeholder="Degree"
            name="degree"
            value={degree}
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="focus">Focus</label>
          <input
            className="form-input"
            placeholder="Focus"
            name="focus"
            value={focus}
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
          <label htmlFor="to">To Date</label>
          <input
            className="form-input"
            value={to}
            onChange={event => handleChange(event)}
            type="date"
            name="to"
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

AddEducation.propTypes = {
  createEducation: PropTypes.func.isRequired
}

export default connect(
  null,
  { createEducation }
)(AddEducation);
