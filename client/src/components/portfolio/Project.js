import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Project = ({ id, title, url, image, desc, technologies }) => {
  return (
    <div>
      { !id ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <h1>{ title }</h1>
          <button className="btn">
            <Link to={`/portfolios/${id}/edit`}>Edit</Link>
          </button>
        </Fragment>
      ) }
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  technologies: PropTypes.array
}

export default Project;
