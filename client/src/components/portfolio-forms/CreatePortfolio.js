import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreatePortfolio = props => {
  const [ formData, setFormData ] = useState({
    title: '',
    url: '',
    image: '',
    desc: '',
    technologies: ''
  });
  const { title, url, image, desc, technologies } = formData;
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value]
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="portfolio-form">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Url</label>
          <input
            name="url"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            name="image"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            name="desc"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input
            name="technologies"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
      </form>
    </div>
  )
}

CreatePortfolio.propTypes = {

}

export default CreatePortfolio;
