import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { createResume, fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

const EditResume = ({
  createResume,
  fetchResume,
  history,
  resume: {
    loading,
    resume
  }
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

  useEffect(() => {
    fetchResume();

    let newTechs = '';
    if (resume.technologies) {
      newTechs = resume.technologies.join(',');
    }
    setFormData({
      name: loading || !resume.name ? '' : resume.name,
      phone: loading || !resume.phone ? '' : resume.phone,
      number: loading || !resume.address ? '' : resume.address.number,
      street: loading || !resume.address ? '' : resume.address.street,
      apartment: loading || !resume.address ? '' : resume.address.apartment,
      city: loading || !resume.address ? '' : resume.address.city,
      state: loading || !resume.address ? '' : resume.address.state,
      zip: loading || !resume.address ? '' : resume.address.zip,
      website: loading || !resume.website ? '' : resume.website,
      bio: loading || !resume.bio ? '' : resume.bio,
      technologies: loading || !resume.technologies ? '' : newTechs
    });
  }, [loading]);

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
    bio,
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
    // Send formData, history, and edit=true
    createResume(formData, history, true);

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
          <label htmlFor="phone">Phone</label>
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
          <label htmlFor="number">House Number</label>
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
          <label htmlFor="street">Street</label>
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
          <label htmlFor="apartment">Apartment</label>
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
          <label htmlFor="city">City</label>
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
          <label htmlFor="state">State</label>
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
          <label htmlFor="zip">Zipcode</label>
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
          <label htmlFor="website">Website</label>
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
          <label htmlFor="bio">Bio</label>
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
          <label htmlFor="technologies">Technologies</label>
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

EditResume.propTypes = {
  fetchResume: PropTypes.func.isRequired,
  createResume: PropTypes.func.isRequired,
  resume: PropTypes.object,
  history: PropTypes.object
}

const mapStateToProps = state => ({
  resume: state.resume
})

export default connect(
  mapStateToProps,
  { createResume, fetchResume }
)(EditResume);
