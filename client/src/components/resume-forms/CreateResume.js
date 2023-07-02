import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createResume, reset } from '../../features/resume/resumeSlice';

import Spinner from '../layout/Spinner';

const CreateResume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { resume, isSuccess, isError, isLoading, message } = useSelector((state) => state.resume);

  const [ formData, setFormData ] = useState({
    name: '',
    phone: '',
    email: '',
    number: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    github: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    website: '',
    technologies: '',
    bio: '',
    goals: ''
  });
  const [ displaySocialInputs, toggleSocialInputs ] = useState(false);
  const {
    name,
    phone,
    email,
    number,
    street,
    apartment,
    city,
    state,
    zip,
    github,
    instagram,
    linkedin,
    twitter,
    website,
    technologies,
    bio,
    goals
  } = formData;

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);

    dispatch(createResume);

    // Reset formData
    setFormData({
    name: '',
    phone: '',
    email: '',
    number: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    github: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    website: '',
    technologies: '',
    bio: '',
    goals: ''
    });
  }

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      navigate('/');
    }

    dispatch(reset);
  }, [resume, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) <Spinner />

  return (
    <div className="form container">
      <h1>Create a Resume</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={name}
            placeholder="Name"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={phone}
            placeholder="Phone"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            placeholder="Email"
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">House Number</label>
          <input
            placeholder="House Number"
            name="number"
            value={number}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            placeholder="Street"
            name="street"
            value={street}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apartment">Apartment</label>
          <input
            placeholder="Apartment"
            name="apartment"
            value={apartment}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            placeholder="City"
            name="city"
            value={city}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            placeholder="State"
            name="state"
            value={state}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zipcode</label>
          <input
            placeholder="Zipcode"
            name="zip"
            value={zip}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            placeholder="Website"
            name="website"
            value={website}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            placeholder="Bio"
            name="bio"
            value={bio}
            className="form-input textarea"
            onChange={event => handleChange(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="goals">Goals</label>
          <textarea
            placeholder="Goals"
            name="goals"
            value={goals}
            className="form-input textarea"
            onChange={event => handleChange(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input
            placeholder="Technologies"
            name="technologies"
            value={technologies}
            className="form-input"
            type="text"
            onChange={event => handleChange(event)}
          />
          <small>Separate each value with a comma(,)</small>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className="btn"
          >Add Social Media Links</button>
        </div>
        { displaySocialInputs && (
          <>
            <div className="form-group">
              <label htmlFor="github">Github</label>
              <input
                placeholder="Github"
                name="github"
                value={github}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="instagram">Instagram</label>
              <input
                placeholder="Instagram"
                name="instagram"
                value={instagram}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">Linkedin</label>
              <input
                placeholder="Linkedin"
                name="linkedin"
                value={linkedin}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="twitter">Twitter</label>
              <input
                placeholder="Twitter"
                name="twitter"
                value={twitter}
                className="form-input"
                type="text"
                onChange={event => handleChange(event)}
              />
            </div>
          </>
        )}
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  )
}

export default CreateResume;
