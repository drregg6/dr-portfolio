import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchUserPorts } from '../../actions/portfolio';
import { connect } from 'react-redux';

const Portfolio = ({ portfolio, fetchUserPorts }) => {
  useEffect(() => {
    fetchUserPorts("5db0f009713473288793f118");
  }, [fetchUserPorts]);

  const { loading, userPortfolios } = portfolio;
  return (
    <div className="portfolio">
      { loading ? (
        <h1>Loading</h1>
      ) : (
        <h1>Portfolios have loaded</h1>
      ) }
    </div>
  )
}

Portfolio.propTypes = {
  fetchUserPorts: PropTypes.func.isRequired,
  portfolio: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchUserPorts }
)(Portfolio);