import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../store/actions';

import '../histogram.css';

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
      <div className="v2-gas-prices">
        <div className="v2-title-wrapper">
          <div className="v2-title">
            <div className="v2-inner-wrapper">
              <div className="v2-top-title">Gas Comparison</div>
              <div className="v2-bottom-title">Continental US vs Hawaii</div>
            </div>
          </div>
        </div>
        <div className="v2-key">
          <div className="v2-US-key" />
          <p className="v2-US-key-text">Continental US Prices</p>
          <div className="v2-Hawaii-key" />
          <p className="v2-Hawaii-key-text">Hawaii Prices</p>
        </div>
        {this.props.isLoading && (
          <div className="v2-key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {!this.isLoading && gasPrices.length > 0 && (
          <div className="v2-gas-wrapper">
            <div className="v2-columns">
              <div className="v2-months">
                <div className="v2-year">2006</div>
                <div className="v2-year">2007</div>
                <div className="v2-year">2008</div>
                <div className="v2-year">2009</div>
                <div className="v2-year">2010</div>
                <div className="v2-year">2011</div>
                <div className="v2-year">2012</div>
              </div>
              <div>
                {gasPrices.map((price, index) => (
                  <div key={index} className="v2-price-graph">
                    <div className="v2-date">
                      <p>{price.date}</p>
                    </div>
                    <div className="v2-hawaii-graph">
                      <div
                        className="v2-hawaii-line"
                        style={{
                          width: `${(Number(price.HawaiiPrice) / 5) * 100}%`,
                        }}
                      />
                      <p>${price.HawaiiPrice}</p>
                    </div>
                    <div className="v2-us-graph">
                      <div
                        className="v2-us-line"
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
