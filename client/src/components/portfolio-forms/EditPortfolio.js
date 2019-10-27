import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchPort } from '../../actions/portfolio';
import { connect } from 'react-redux';

const EditPortfolio = ({
  fetchPort,
  portfolio: {
    loading,
    portfolio
  },
  match
}) => {
  const [ formData, setFormData ] = useState({
    title: '',
    url: '',
    image: '',
    desc: '',
    technologies: ''
  });

  const { title, url, image, desc, technologies } = formData;

  useEffect(() => {
    fetchPort(match.params.id);
    if (portfolio) {
      console.log(portfolio);
    }
    setFormData({
      title: loading || !portfolio.title ? '' : portfolio.title,
      url: loading || !portfolio.url ? '' : portfolio.url,
      image: loading || !portfolio.image ? '' : portfolio.image,
      desc: loading || !portfolio.desc ? '' : portfolio.desc,
      technologies: loading || !portfolio.technologies ? '' : portfolio.technologies
    });
  }, [fetchPort, portfolio, loading, match.params.id]);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value]
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // Send formData to createPortfolio

    // Reset formData
    setFormData({
      title: '',
      url: '',
      image: '',
      desc: '',
      technologies: ''
    });
  }
  return (
    <div className="portfolio-form">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            placeholder="Title"
            value={title}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Url</label>
          <input
            name="url"
            placeholder="URL"
            value={url}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            name="image"
            placeholder="Image"
            value={image}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            name="desc"
            placeholder="Description"
            value={desc}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input
            name="technologies"
            placeholder="Technologies"
            value={technologies}
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

EditPortfolio.propTypes = {
  fetchPort: PropTypes.func.isRequired,
  portfolio: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchPort }
)(EditPortfolio);
