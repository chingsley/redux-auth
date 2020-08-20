import React from 'react';
import { connect } from 'react-redux';
import momemnt from 'moment';
import { withRouter } from 'react-router-dom';
import Apploader from './AppLoader';

import { getData } from '../store/actions';

import '../histogram.css';
import AppLoader from './AppLoader';

class GasPriceHistogram extends React.Component {
  render() {
    return (
      <div className="gas-prices">
        <AppLoader isLoading={this.props.isLoading} />
      </div>
    );
  }
}

const mapStateToProps = ({ gasPrices, isLoading }) => ({
  gasPrices,
  isLoading,
});

export default withRouter(
  connect(mapStateToProps, { getData })(GasPriceHistogram)
);
