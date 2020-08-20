import React from 'react';
import { connect } from 'react-redux';
import momemnt from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../store/actions';

import '../histogram.css';

class GasPriceHistogram extends React.Component {
  render() {
    return (
      <div className="gas-prices">
        <div className="title-wrapper">desgin</div>
      </div>
    );
  }
}

const mapStateToProps = ({ gasPrices, fetchingData }) => ({
  gasPrices,
  fetchingData,
});

export default withRouter(
  connect(mapStateToProps, { getData })(GasPriceHistogram)
);
