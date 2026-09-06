import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, loading } = useSelector((state) => state.auth);
	return !isAuthenticated && !loading ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
