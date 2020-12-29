import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
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
    live: '',
    code: '',
    image: '',
    desc: '',
    year: '',
    technologies: ''
  });
  const { title, year, live, code, image, desc, technologies } = formData;

  useEffect(() => {
    fetchPort(match.params.id);
  }, [fetchPort, match.params.id]);
  useEffect(() => {
    let newTechs = '';
    if (editPort) {
      if (editPort.technologies) {
        newTechs = editPort.technologies.join(',');
      }
      setFormData({
        title: loading || !editPort.title ? '' : editPort.title,
        year: loading || !editPort.year ? '' : editPort.year,
        live: loading || !editPort.live ? '' : editPort.live,
        code: loading || !editPort.code ? '' : editPort.code,
        image: loading || !editPort.image ? '' : editPort.image,
        desc: loading || !editPort.desc ? '' : editPort.desc,
        technologies: loading || !editPort.technologies ? '' : newTechs
      })
    }
  }, [editPort, loading]);

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
      year: '',
      live: '',
      code: '',
      image: '',
      desc: '',
      technologies: ''
    });
  }
  return (
    <div>
      <div className="form container">
        <h1>Edit { title }</h1>
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
            <label htmlFor="year">Year</label>
            <input
              name="year"
              placeholder="Year"
              value={year}
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
              placeholder="Image"
              value={image}
              className="form-input"
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
              name="technologies"
              placeholder="Technologies"
              value={technologies}
              className="form-input"
              type="text"
              onChange={event => handleChange(event)}
            />
            <small>Separate each value with a comma(,)</small>
          </div>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  )
}

EditPortfolio.propTypes = {
  createPortfolio: PropTypes.func.isRequired,
  fetchPort: PropTypes.func.isRequired,
  portfolio: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchPort, createPortfolio }
)(withRouter(EditPortfolio));