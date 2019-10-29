import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deletePortfolio } from '../../actions/portfolio';

const Project = ({
  isAuthenticated,
  deletePortfolio,
  id,
  title,
  url,
  image,
  desc,
  technologies
}) => {
  return (
    <div>
      { !id ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <h1>{ title }</h1>
          { isAuthenticated && (
            <Fragment>
              <button className="btn">
                <Link to={`/portfolios/${id}/edit`}>Edit</Link>
              </button>
              <button className="btn" onClick={() => deletePortfolio(id)}>
                Delete
              </button>
            </Fragment>
          )}
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
