import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
	name: 'portfolio',
	initialState: {
		users: [],
		editPort: null,
		portfolios: [],
		loading: true,
	},
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
			state.loading = false;
		},
		setPortfolio: (state, action) => {
			state.editPort = action.payload;
			state.loading = false;
		},
		setPortfolios: (state, action) => {
			state.portfolios = action.payload;
			state.loading = false;
		},
		deletePortfolioItem: (state, action) => {
			state.portfolios = state.portfolios.filter(
				(p) => p._id !== action.payload,
			);
			state.loading = false;
		},
		clearPortfolio: (state) => {
			state.editPort = null;
			state.loading = false;
		},
	},
});

export const { setUsers, setPortfolio, setPortfolios, deletePortfolioItem, clearPortfolio } =
	portfolioSlice.actions;
export default portfolioSlice.reducer;
