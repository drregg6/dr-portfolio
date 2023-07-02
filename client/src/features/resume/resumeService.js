// Instead of try/catch
// Success and failure is dependent on the backend
// The backend will send the payload plus a message
// The store updating will be handled in the Slice
//    deleteEmployment.fulfilled => {
//      state.goals = state.resume.employments.filter((emp) => emp._id !== action.payload.id);
//    }
// All payloads will come with messages to give feedback to user

// Messages on success or failure will be sent
// Then I can give that information with toast.success in the Component

// Navigation can be placed in Components now using useNavigate

import axios from 'axios';

const API_URL = '/api/resumes/';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}


// Get first resume
const getResume = async () => {
  const res = await axios.get(API_URL);

  return res.data;
}

// Update resume
const updateResume = async (formData) => {
    const res = await axios.post(API_URL, formData, config);
    return res.data;
}

// Create employment
const createEmployment = async (formData) => {
  const res = await axios.put(API_URL + 'employment', formData, config);
  return res.data;
}

// Delete employment
const deleteEmployment = async (id) => {
  const res = await axios.delete(API_URL + `employment/${id}/`);
  return res.data;
}

// Create education
const createEducation = async (formData) => {
  const res = await axios.put(API_URL + 'education', formData, config);
  return res.data;
}

// Delete education
const deleteEducation = async (id) => {
  const res = await axios.delete(API_URL + `education/${id}/`);
  return res.data;
}

// Create experience
const createExperience = async (formData) => {
  const res = await axios.put(API_URL + 'experience', formData, config);
  return res.data;
}

// Delete experience
const deleteExperience = async (id) => {
  const res = await axios.delete(API_URL + `experience/${id}/`);
  return res.data;
}



const resumeService = {
  getResume,
  updateResume,
  createEmployment,
  deleteEmployment,
  createEducation,
  deleteEducation,
  createExperience,
  deleteExperience
}

export default resumeService;