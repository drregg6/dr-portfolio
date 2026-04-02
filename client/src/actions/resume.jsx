import { setResume, deleteExperienceItem, deleteEmploymentItem, deleteEducationItem } from '../slices/resumeSlice';
import axios from 'axios';
import { setAlert } from './alert';

export const fetchResume = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/resumes');
		dispatch(setResume(res.data));
	} catch (err) {
		console.error(err);
	}
};

export const createResume =
	(formData, navigate, edit = false) =>
	async (dispatch) => {
		const config = { headers: { 'Content-Type': 'application/json' } };
		try {
			const res = await axios.post('/api/resumes', formData, config);
			dispatch(setResume(res.data));
			dispatch(setAlert(!edit ? 'Resume created!' : 'Resume edited!', 'success'));
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

export const createEmployment = (formData, navigate) => async (dispatch) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	try {
		const res = await axios.put('/api/resumes/employment', formData, config);
		dispatch(setResume(res.data));
		dispatch(setAlert('Employment created!', 'success'));
		navigate('/');
	} catch (err) {
		console.error(err);
	}
};

export const deleteEmployment = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/resumes/employment/${id}`);
		dispatch(deleteEmploymentItem(id));
		dispatch(setAlert('Employment deleted!', 'danger'));
	} catch (err) {
		console.error(err);
	}
};

export const createEducation = (formData, navigate) => async (dispatch) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	try {
		const res = await axios.put('/api/resumes/education', formData, config);
		dispatch(setResume(res.data));
		dispatch(setAlert('Education created!', 'success'));
		navigate('/');
	} catch (err) {
		console.error(err);
	}
};

export const deleteEducation = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/resumes/education/${id}`);
		dispatch(deleteEducationItem(id));
		dispatch(setAlert('Education deleted!', 'danger'));
	} catch (err) {
		console.error(err);
	}
};

export const createExperience = (formData, navigate) => async (dispatch) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	try {
		const res = await axios.put('/api/resumes/experience', formData, config);
		dispatch(setResume(res.data));
		dispatch(setAlert('Experience created!', 'success'));
		navigate('/');
	} catch (err) {
		console.error(err);
	}
};

export const deleteExperience = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/resumes/experience/${id}`);
		dispatch(deleteExperienceItem(id));
		dispatch(setAlert('Project deleted!', 'danger'));
	} catch (err) {
		console.error(err);
	}
};
