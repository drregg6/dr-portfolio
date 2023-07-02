import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';

import utils from '../../utils/utils';
import {
  getResume,
  reset
} from '../../features/resume/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';

import Employment from './Employment';
import Experience from './Experience';
import Education from './Education';

const Resume = () => {
  const dispatch = useDispatch();
  const { resume, isLoading } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getResume());
    return () => {
      dispatch(reset());
    }
  }, [dispatch]);
  let name, phone, email, address, technologies, goals;

  if (resume) {
    name = resume.name;
    phone = resume.phone;
    email = resume.email;
    address = resume.address;
    technologies = resume.technologies;
    goals = resume.goals;
  }

  if (isLoading) (
    <Spinner />
  )

  return (
    <div className="resume container">
      resume ? (
        <Fragment>
          <div className="resume-header">
            <h1 className="resume-name">{ name }</h1>
            <div className="resume-contact">
              <div className="address">
                { address.number } { address.street }, { address.apartment  }, { address.city } { address.state }, { address.zip }
              </div><span>-</span><div className="phone">{ utils.formatPhone(phone) }</div><span>-</span><div className="email">{email}</div>
            </div>
          </div>
          <div className="resume-goals">
            {goals}
          </div>
          <div className="resume-content">
            <div className="column-left">Projects</div>
            <div className="column-right experiences">
              {
                resume.experience.map(project => (
                  <Experience
                    key={project._id}
                    id={project._id}
                    title={project.title}
                    year={project.year}
                    desc={project.desc}
                    technologies={project.technologies}
                  />
                ))
              }
            </div>
            <div className="column-left">Work History</div>
            <div className="column-right employments">
            { 
                resume.employment.map(job => (
                  <Employment
                    key={job._id}
                    id={job._id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    from={job.from}
                    to={job.to}
                    current={job.current}
                    desc={job.desc}
                  />
                ))
              }
            </div>
            <div className="column-left">Education</div>
            <div className="column-right educations">
              {
                resume.education.map(school => (
                  <Education
                    key={school._id}
                    id={school._id}
                    school={school.school}
                    location={school.location}
                    degree={school.degree}
                    focus={school.focus}
                    from={school.from}
                    to={school.to}
                  />
                ))
              }
            </div>
            <div className="column-left">Skills</div>
            <div className="column-right skills">
              <ul>
              {
                technologies.map((tech, i) => {
                  return <li key={i}>- {utils.capitalize(tech)}</li>
                })
              }
              </ul>
            </div>
          </div>
        </Fragment>
      ) : (
        <h1>No resume exists!</h1>
      )
    </div>
  )
}

export default Resume;
