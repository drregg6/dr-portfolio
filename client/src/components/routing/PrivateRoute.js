import PropTypes from 'prop-types';
import { redirect } from 'react-router';

import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) =>
	!isAuthenticated && !loading ? redirect('/') : children;

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
