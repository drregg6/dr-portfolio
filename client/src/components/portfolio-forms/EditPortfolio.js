import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchPort, createPortfolio } from '../../actions/portfolio';
import { connect } from 'react-redux';

const EditPortfolio = ({
  createPortfolio,
  fetchPort,
  history,
  portfolio: {
    loading,
    editPort
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

  useEffect(() => {
    fetchPort(match.params.id);
    let newTechs = '';
    if (editPort.technologies) {
      newTechs = editPort.technologies.join(',');
    }
    if (!loading) {
      setFormData({
        title: !editPort.title ? '' : editPort.title,
        url: !editPort.url ? '' : editPort.url,
        image: !editPort.image ? '' : editPort.image,
        desc: !editPort.desc ? '' : editPort.desc,
        technologies: !editPort.technologies ? '' : newTechs,
      })
    }
  }, []);

  const { title, url, image, desc, technologies } = formData;
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
    createPortfolio(formData, history, match.params.id, true);

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
  createPortfolio: PropTypes.func.isRequired,
  fetchPort: PropTypes.func.isRequired,
  portfolio: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchPort, createPortfolio }
)(EditPortfolio);
