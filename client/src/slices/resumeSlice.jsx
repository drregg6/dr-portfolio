import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		resume: {},
		loading: true,
	},
	reducers: {
		setResume: (state, action) => {
			state.resume = action.payload;
			state.loading = false;
		},
		deleteExperienceItem: (state, action) => {
			state.resume.experience = state.resume.experience.filter(
				(p) => p._id !== action.payload,
			);
			state.loading = false;
		},
		deleteEmploymentItem: (state, action) => {
			state.resume.employment = state.resume.employment.filter(
				(j) => j._id !== action.payload,
			);
			state.loading = false;
		},
		deleteEducationItem: (state, action) => {
			state.resume.education = state.resume.education.filter(
				(s) => s._id !== action.payload,
			);
			state.loading = false;
		},
	},
});

export const { setResume, deleteExperienceItem, deleteEmploymentItem, deleteEducationItem } =
	resumeSlice.actions;
export default resumeSlice.reducer;
