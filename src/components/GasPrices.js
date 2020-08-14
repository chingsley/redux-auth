import React from 'react';
import { connect } from 'react-redux';
import { fetchGasPrices } from '../store/actions';

import GasCard from './GasCard';

class GasPrices extends React.Component {
  componentDidMount() {
    this.props.fetchGasPrices();
  }
  render() {
    console.log('\n\ndata =  ', this.props.data);
    console.log('\n\n error = ', this.props.error);
    return (
      <>
        {this.props.error && (
          <div className="error-container">
            <i className="error-text">{this.props.error}</i>
          </div>
        )}
        {/* <h1>Protected page</h1> */}
        <div className="containing-all-cards">
          {this.props.data.map((record, index) => (
            <GasCard key={index} record={record} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
  data: state.data,
});

export default connect(mapStateToProps, { fetchGasPrices })(GasPrices);
