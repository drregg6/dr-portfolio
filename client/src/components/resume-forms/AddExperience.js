import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createExperience } from '../../actions/resume';
import { connect } from 'react-redux';

const AddExperience = ({ createExperience, history }) => {
  const [ formData, setFormData ] = useState({
    title: '',
    year: '',
    desc: '',
    technologies: ''
  });

  const {
    title,
    year,
    desc,
    technologies
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
    createExperience(formData, history);

    // Reset formData
  }
  return (
    <div className="employment-form">
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
          <label htmlFor="year">Year</label>
          <input
            className="form-input"
            placeholder="Year"
            name="year"
            value={year}
            type="text"
            onChange={event => handleChange(event)}
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
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input
            className="form-input"
            placeholder="Technologies"
            name="technologies"
            value={technologies}
            type="text"
            onChange={event => handleChange(event)}
          />
          <small>Separate values with commas(,)</small>
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

AddExperience.propTypes = {
  createExperience: PropTypes.func.isRequired
}

export default connect(
  null,
  { createExperience }
)(AddExperience);
