import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createPortfolio } from '../../actions/portfolio';
import { connect } from 'react-redux';

const CreatePortfolio = ({ createPortfolio, history }) => {
  const [ formData, setFormData ] = useState({
    title: '',
    live: '',
    code: '',
    image: '',
    desc: '',
    technologies: ''
  });
  const { title, live, code, image, desc, technologies } = formData;
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // Send formData to createPortfolio
    createPortfolio(formData, history);

    // Reset formData
    setFormData({
      title: '',
      live: '',
      code: '',
      image: '',
      desc: '',
      technologies: ''
    });
  }
  return (
    <div className="portfolio-form container">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            placeholder="Title"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="live">Live Url</label>
          <input
            name="live"
            value={live}
            placeholder="Live Url"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Code Url</label>
          <input
            name="code"
            value={code}
            placeholder="Code Url"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            name="image"
            value={image}
            placeholder="Image"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            name="desc"
            value={desc}
            placeholder="Description"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input
            name="technologies"
            value={technologies}
            placeholder="Technologies"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
          <small>Please split technologies with commas(,)</small>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

CreatePortfolio.propTypes = {
  createPortfolio: PropTypes.func.isRequired
}

export default connect(
  null,
  { createPortfolio }
)(withRouter(CreatePortfolio));
