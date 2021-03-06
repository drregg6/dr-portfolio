import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

import { fetchResume } from '../../actions/resume';
import { sendEmail } from '../../actions/contact';
import { connect } from 'react-redux';

const Contact = ({
  resume: { resume, loading },
  fetchResume,
  sendEmail
}) => {
  useEffect(() => {
    fetchResume();
  }, [fetchResume]);
  const [ formData, setFormData ] = useState({
    email: '',
    subject: '',
    msg: ''
  });

  const { email, subject, msg } = useState;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    sendEmail(formData);

    // Reset form data
    setFormData({
      email: '',
      subject: '',
      msg: ''
    });
  }
  return (
    <div className="contact container">
      <div className="splash center">
        <h1>Contact me</h1>
      </div>
      <div className="contact-content-container">
        <div className="content-break pattern-background center chat">
          <div>
            <h2 className="head">Lets chat</h2>
            <p className="contact-p p-blurb">
              I am available for hire! I am free to assist people with their open-source projects! If you are new to the programming world, I would love to help ya out! If you have any questions, comments, or suggestions for me, please feel free to let me know. Thanks!
            </p>
          </div>
        </div>
        <div className="contact-content contact-email">
          <h2 className="head">Email me</h2>
          <form className="contact-form" onSubmit={event => {handleSubmit(event)}}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={event => {handleChange(event)}}
                className="form-input"
                value={email}
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={event => {handleChange(event)}}
                className="form-input"
                value={subject}
                placeholder="Subject line"
              />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Write your message"
                  rows="5"
                  id="msg"
                  name="msg"
                  onChange={event => {handleChange(event)}}
                  className="form-input textarea"
                  value={msg}
                ></textarea>
              </div>
              <input
                type="submit"
                className="btn"
                value="Submit"
              />
          </form>
        </div>
        <div className="content-break center pattern-background">
          <div>
            <h2 className="head">Socialize with me</h2>
            { loading ? (<Spinner />) : (
              <div className="social-component-icons">
                <a href={resume.social.github} target="_blank" rel="noopener noreferrer" className="social-component-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href={resume.social.twitter} target="_blank" rel="noopener noreferrer" className="social-component-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={resume.social.instagram}target="_blank" rel="noopener noreferrer" className="social-component-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={resume.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-component-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.propTypes = {
  fetchResume: PropTypes.func.isRequired,
  resume: PropTypes.object
}

const mapStateToProps = state => ({
  resume: state.resume
});

export default connect(
  mapStateToProps,
  { fetchResume, sendEmail }
)(Contact);
