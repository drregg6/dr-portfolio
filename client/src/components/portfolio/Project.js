/*

Why isn't isAuthenticated working for the button?
Fuck this.

*/

import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Project = ({
  isAuthenticated,
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
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth
});

export default connect(
  mapStateToProps
)(Project);
