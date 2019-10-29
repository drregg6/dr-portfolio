import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createResume } from '../../actions/resume';
import { connect } from 'react-redux';

const CreateResume = ({
  createResume,
  history
}) => {
  const [ formData, setFormData ] = useState({
    name: '',
    phone: '',
    number: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    website: '',
    technologies: '',
    bio: ''
  });
  const {
    name,
    phone,
    number,
    street,
    apartment,
    city,
    state,
    zip,
    website,
    technologies,
    bio
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
    // Send formData and history to createResume
    createResume(formData, history);

    // Reset formData
    setFormData({
      name: '',
    phone: '',
    number: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    website: '',
    technologies: '',
    bio: ''
    });
  }

  return (
    <div className="resume-form">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={name}
            placeholder="Name"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Phone</label>
          <input
            name="phone"
            value={phone}
            placeholder="Phone"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">House Number</label>
          <input
            placeholder="House Number"
            name="number"
            value={number}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Street</label>
          <input
            placeholder="Street"
            name="street"
            value={street}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Apartment</label>
          <input
            placeholder="Apartment"
            name="apartment"
            value={apartment}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">City</label>
          <input
            placeholder="City"
            name="city"
            value={city}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">State</label>
          <input
            placeholder="State"
            name="state"
            value={state}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Zipcode</label>
          <input
            placeholder="Zipcode"
            name="zip"
            value={zip}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Website</label>
          <input
            placeholder="Website"
            name="website"
            value={website}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Bio</label>
          <input
            placeholder="Bio"
            name="bio"
            value={bio}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Technologies</label>
          <input
            placeholder="Technologies"
            name="technologies"
            value={technologies}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
          <small>Separate values with commas(,)</small>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  )
}

CreateResume.propTypes = {
  createResume: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(
  null,
  { createResume }
)(CreateResume);
