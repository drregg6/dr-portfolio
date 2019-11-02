import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

import { fetchResume } from '../../actions/resume';
import { connect } from 'react-redux';

const Contact = ({
  resume: { resume, loading },
  fetchResume
}) => {
  useEffect(() => {
    fetchResume();
  }, []);
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
        <div className="contact-content">
          <h2 className="head secondary">Please Contact Me!</h2>
          <p className="text-p">
            I would love to be hired! I am free to assist people with their open-source projects! If you are new to the programming world, I would love to help ya out! If you have any questions, comments, or suggestions for <span className="highlight">Phila Brews</span>, please feel free to let me know. I am also in the early stages of developing a sister app for <span className="highlight">Phila Brews</span>. Check out the <Link to="/about">About</Link> page for more information, and if you would like to contribute, please shoot me an email!
          </p>
        </div>
        <div className="contact-content">
          <h2 className="secondary">Email Me</h2>
          <form onSubmit={event => {handleSubmit(event)}}>
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
        <div className="contact-content">
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
  { fetchResume }
)(Contact);
