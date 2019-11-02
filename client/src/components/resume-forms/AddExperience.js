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
    <div className="form container">
      <h1>Add to Your Experiences</h1>
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
          <textarea
            placeholder="Description"
            name="desc"
            value={desc}
            className="form-input textarea"
            onChange={event => handleChange(event)}
          ></textarea>
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
          <small>Separate each value with a comma(,)</small>
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
