import React from 'react';
import { connect } from 'react-redux';
import { fetchGasListing } from '../store/actions';

import GasCard from './GasCard';

class GasListing extends React.Component {
  componentDidMount() {
    this.props.fetchGasListing();
  }
  render() {
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

export default connect(mapStateToProps, { fetchGasListing })(GasListing);
