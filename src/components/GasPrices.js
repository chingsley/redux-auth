import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../store/actions';

import '../gasPrices.css';

class GasPrices extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  formatData = () => {
    const formattedData = [];
    this.props.gasPrices.forEach((price, index, arr) => {
      if (price.location === 'US') {
        formattedData.push({
          date: moment(price.date).format('MMM'),
          USPrice: price.price,
          HawaiiPrice: arr[index + 1].price,
        });
      }
    });
    return formattedData;
  };

  render() {
    const gasPrices = this.formatData();
    console.log(gasPrices);
    return (
      <div className="gas-prices">
        <div className="title-wrapper">
          <div className="title">
            <div className="inner-wrapper">
              <div className="top-title">Gas Comparison</div>
              <div className="bottom-title">Continental US vs Hawaii</div>
            </div>
          </div>
        </div>
        <div className="key">
          <div className="US-key" />
          <p className="US-key-text">Continental US Prices</p>
          <div className="Hawaii-key" />
          <p className="Hawaii-key-text">Hawaii Prices</p>
        </div>
        {this.props.isLoading && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {!this.isLoading && gasPrices.length > 0 && (
          <div className="gas-wrapper">
            <div className="columns">
              <div className="months">
                <div className="year">2006</div>
                <div className="year">2007</div>
                <div className="year">2008</div>
                <div className="year">2009</div>
                <div className="year">2010</div>
                <div className="year">2011</div>
                <div className="year">2012</div>
              </div>
              <div>
                {gasPrices.map((price, index) => (
                  <div key={index} className="price-graph">
                    <div className="date">
                      <p>{price.date}</p>
                    </div>
                    <div className="hawaii-graph">
                      <div
                        className="hawaii-line"
                        style={{
                          width: `${(Number(price.HawaiiPrice) / 5) * 100}%`,
                        }}
                      />
                      <p>${price.HawaiiPrice}</p>
                    </div>
                    <div className="us-graph">
                      <div
                        className="us-line"
                        style={{
                          width: `${(Number(price.USPrice) / 5) * 100}%`,
                        }}
                      >
                        <p>${price.USPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ gasPrices, isLoading }) => ({
  gasPrices,
  isLoading,
});

export default withRouter(connect(mapStateToProps, { getData })(GasPrices));
