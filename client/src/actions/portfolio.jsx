import { setUsers, setPortfolio, setPortfolios, deletePortfolioItem, clearPortfolio } from '../slices/portfolioSlice';
import { setAlert } from './alert';
import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/portfolios');
		dispatch(setUsers(res.data));
	} catch (error) {
		console.error(error);
	}
};

export const fetchPortfolios = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/portfolios/${id}`);
		dispatch(setPortfolios(Array.isArray(res.data) ? res.data : []));
	} catch (error) {
		console.error(error);
	}
};

export const fetchPort = (id) => async (dispatch) => {
	try {
		dispatch(clearPortfolio());
		const res = await axios.get(`/api/portfolios/portfolio/${id}`);
		dispatch(setPortfolio(res.data.portfolio));
	} catch (err) {
		console.error(err);
	}
};

export const createPortfolio =
	(newPortfolio, navigate, id = null, isEdit = false) =>
	async (dispatch) => {
		const config = { headers: { 'Content-Type': 'application/json' } };
		if (id) {
			newPortfolio._id = id;
		}
		try {
			const res = await axios.post('/api/portfolios', newPortfolio, config);
			dispatch(setPortfolios(res.data));
			dispatch(setAlert(isEdit ? 'Portfolio Edited' : 'Portfolio Created!', 'success'));
			if (isEdit) dispatch(clearPortfolio());
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

export const deletePortfolio = (id) => async (dispatch) => {
	if (window.confirm('Are you sure? This action CANNOT be undone!')) {
		try {
			await axios.delete(`/api/portfolios/${id}`);
			dispatch(deletePortfolioItem(id));
			dispatch(setAlert('Portfolio deleted', 'success'));
		} catch (err) {
			console.error(err);
		}
	}
};
