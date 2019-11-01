import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

const Resume = ({
  fetchResume,
  resume: { loading, resume }
}) => {
  useEffect(() => {
    fetchResume();
  }, []);
  return (
    <div className="resume container">
      { loading ? (
        <h1>Loading...</h1>
      ) : (
        resume ? (
          <h1>Welcome {resume.name}</h1>
        ) : (
          <h1>No resume exists!</h1>
        )
      )}
    </div>
  )
}

Resume.propTypes = {
  fetchResume: PropTypes.func.isRequired,
  resume: PropTypes.object
}

const mapStateToProps = state => ({
  resume: state.resume
});

export default connect(
  mapStateToProps,
  { fetchResume }
)(Resume);
