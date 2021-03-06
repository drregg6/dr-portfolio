import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { createResume } from '../../actions/resume';
import { connect } from 'react-redux';

const EditResume = ({
  createResume,
  history,
  resume: {
    loading,
    resume
  }
}) => {
  const [ formData, setFormData ] = useState({
    name: '',
    phone: '',
    email: '',
    number: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    github: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    website: '',
    technologies: '',
    bio: '',
    goals: ''
  });
  let {
    name,
    phone,
    email,
    number,
    street,
    apartment,
    city,
    state,
    zip,
    github,
    twitter,
    instagram,
    linkedin,
    website,
    bio,
    goals,
    technologies
  } = formData;

  useEffect(() => {
    let newTechs = '';
    if (resume) {
      if (resume.technologies) {
        newTechs = resume.technologies.join(',');
      }
      setFormData({
        name: loading || !resume.name ? '' : resume.name,
        phone: loading || !resume.phone ? '' : resume.phone,
        email: loading || !resume.email ? '' : resume.email,
        number: loading || !resume.address ? '' : resume.address.number,
        street: loading || !resume.address ? '' : resume.address.street,
        apartment: loading || !resume.address ? '' : resume.address.apartment,
        city: loading || !resume.address ? '' : resume.address.city,
        state: loading || !resume.address ? '' : resume.address.state,
        zip: loading || !resume.address ? '' : resume.address.zip,
        github: loading || !resume.social ? '' : resume.social.github,
        instagram: loading || !resume.social ? '' : resume.social.instagram,
        linkedin: loading || !resume.social ? '' : resume.social.linkedin,
        twitter: loading || !resume.social ? '' : resume.social.twitter,
        website: loading || !resume.website ? '' : resume.website,
        bio: loading || !resume.bio ? '' : resume.bio,
        goals: loading || !resume.goals ? '' : resume.goals,
        technologies: loading || !resume.technologies ? '' : newTechs
      });
    }
  }, [
    loading,
    resume
  ]);
  const [ displaySocialInputs, toggleSocialInputs ] = useState(false);

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
      email: '',
      number: '',
      street: '',
      apartment: '',
      city: '',
      state: '',
      zip: '',
      github: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      website: '',
      technologies: '',
      bio: '',
      goals: ''
    });
  }
  return (
    <div className="form container">
      <h1>Edit Your Resume</h1>
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
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            placeholder="Email"
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
          <textarea
            placeholder="Bio"
            name="bio"
            value={bio}
            className="form-input textarea"
            onChange={event => handleChange(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="goals">Goals</label>
          <textarea
            placeholder="Goals"
            name="goals"
            value={goals}
            className="form-input textarea"
            onChange={event => handleChange(event)}
          ></textarea>
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
          <small>Separate each value with a comma(,)</small>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className="btn"
          >Add Social Media Links</button>
        </div>
        { displaySocialInputs && (
          <Fragment>
            <div className="form-group">
              <label htmlFor="github">Github</label>
              <input
                placeholder="Github"
                name="github"
                value={github}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="instagram">Instagram</label>
              <input
                placeholder="Instagram"
                name="instagram"
                value={instagram}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">Linkedin</label>
              <input
                placeholder="Linkedin"
                name="linkedin"
                value={linkedin}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="twitter">Twitter</label>
              <input
                placeholder="Twitter"
                name="twitter"
                value={twitter}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
          </Fragment>
        )}
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  )
}

EditResume.propTypes = {
  createResume: PropTypes.func.isRequired,
  resume: PropTypes.object,
  history: PropTypes.object
}

const mapStateToProps = state => ({
  resume: state.resume
})

export default connect(
  mapStateToProps,
  { createResume }
)(EditResume);
