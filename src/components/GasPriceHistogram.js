import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import Apploader from './AppLoader';

import { getData } from '../store/actions';

import '../histogram.css';
import AppLoader from './AppLoader';

class GasPriceHistogram extends React.Component {
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
    const formattedGasPrices = this.formatData();
    return (
      <div className="gas-prices">
        <AppLoader isLoading={this.props.isLoading} />
        {this.props.gasPrices.length > 0 && (
          <div className="hist-gas-wrapper">
            <div className="hist-columns">
              <div className="hist-months">
                <div className="hist-year">2006</div>
                <div className="hist-year">2007</div>
                <div className="hist-year">2008</div>
                <div className="hist-year">2009</div>
                <div className="hist-year">2010</div>
                <div className="hist-year">2011</div>
                <div className="hist-year">2012</div>
              </div>
              <div>
                {formattedGasPrices.map((price, index) => (
                  <div key={index} className="hist-price-graph">
                    <div className="hist-date">
                      <p>{price.date}</p>
                    </div>
                    <div className="hist-hawaii-graph">
                      <div
                        className="hist-hawaii-line"
                        style={{
                          width: `${(Number(price.HawaiiPrice) / 5) * 10}`,
                        }}
                      />
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

export default withRouter(
  connect(mapStateToProps, { getData })(GasPriceHistogram)
);
