import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchPortfolios } from '../../actions/portfolio';
import { connect } from 'react-redux';

const Portfolio = ({ portfolio, fetchPortfolios }) => {
  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  const { loading, portfolios } = portfolio;
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
  fetchPortfolios: PropTypes.func.isRequired,
  portfolio: PropTypes.object
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchPortfolios }
)(Portfolio);