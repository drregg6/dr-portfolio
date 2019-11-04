import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deletePortfolio } from '../../actions/portfolio';

const Project = ({
  isAuthenticated,
  deletePortfolio,
  id,
  title,
  year,
  live,
  code,
  image,
  desc,
  technologies
}) => {
  let img;
  if (image) {
    img = image;
  } else {
    img = `http://www.placehold.it/250x250`;
  }
  return (
    <div className="portfolio-project">
      <div
        className="project-img"
        style={
          {
            backgroundImage: `url(${img})`,
            width: 250,
            height: 250
          }
        }
      >
        <a rel="noopener noreferrer" href={live} target="_blank" className="btn img-btn live">Live</a>
        <a rel="noopener noreferrer" href={code} target="_blank" className="btn img-btn code">Code</a>
      </div>
      <div className="project-info">
        <div className="project-header">
          <h1>{ title }</h1>
          <span>{ !year ? '2019' : year }</span>
        </div>
        <div className="project-desc">
          <p>
            { desc }
          </p>
        </div>
        <div className="project-techs">
          { technologies.map((tech, i) => {
              return <span className="project-tech" key={i}>{ tech }</span>
          }) }
        </div>
      </div>
      { isAuthenticated && (
          <button className="delete-button" onClick={() => deletePortfolio(id)}>
            x
          </button>
      )}
      { isAuthenticated && (
        <Link className="edit-portfolio" to={`/portfolios/${id}/edit`}>
          Edit
        </Link>
      )}
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  technologies: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  deletePortfolio: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { deletePortfolio }
)(Project);