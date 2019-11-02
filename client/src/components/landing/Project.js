import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

import { connect } from 'react-redux';
import { deletePortfolio } from '../../actions/portfolio';

const Project = ({
  isAuthenticated,
  deletePortfolio,
  id,
  title,
  live,
  code,
  image,
  desc,
  technologies
}) => {
  return (
    <div className="portfolio-project">
      <div className="project-img">
        <img src={ image ? ( image ) : "http://www.placehold.it/250x250"} />
        <a rel="noopener noreferrer" href={live} target="_blank" className="btn img-btn live">Live</a>
        <a rel="noopener noreferrer" href={code} target="_blank" className="btn img-btn code">Code</a>
      </div>
      <div className="project-info">
        <div className="project-header">
          <h1>{ title }</h1>
          <span>2019</span>
        </div>
        <div className="project-desc">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris vitae ultricies. Neque viverra justo nec ultrices dui. Enim eu turpis egestas pretium aenean pharetra magna ac. Amet aliquam id diam maecenas ultricies mi eget. Tempor orci eu lobortis elementum nibh tellus.
          </p>
        </div>
        <div className="project-techs">
          { technologies.map((tech, i) => {
              return <span className="project-tech" key={i}>{ tech }</span>
          }) }
        </div>
      </div>
      { isAuthenticated && (
          <button className="delete-portfolio" onClick={() => deletePortfolio(id)}>
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