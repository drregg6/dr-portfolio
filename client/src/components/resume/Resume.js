import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

import { fetchResume } from '../../actions/resume';
import formatPhone from '../../utils/formatPhone';
import { connect } from 'react-redux';

const Resume = ({
  fetchResume,
  resume: { loading, resume }
}) => {
  useEffect(() => {
    fetchResume();
  }, []);
  let name, phone, address, social, website, technologies, bio, employment, education, experience;

  if (resume) {
    name = resume.name;
    phone = resume.phone;
    address = resume.address;
    social = resume.social;
    website = resume.website;
    technologies = resume.technologies;
    bio = resume.bio;
    employment = resume.employment;
    education = resume.education;
    experience = resume.experience;
  }

  return (
    <div className="resume container">
      { loading ? (
        <Spinner />
      ) : (
        resume ? (
          <Fragment>
            <div className="resume-header">
              <h1 className="resume-name">{ name }</h1>
              <div className="resume-contact">
                <span className="address">
                  { address.number } { address.street }, { address.city } { address.state }, { address.zip }
                </span> | <span className="phone">{ formatPhone(phone) }</span> | <span className="email">drregg6@gmail.com</span>
              </div>
            </div>
            <div className="resume-content">

            </div>
          </Fragment>
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
