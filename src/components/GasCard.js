import React from 'react';
import styled, { css } from 'styled-components';

const GasCardContainer = styled.div`
  width: 18rem;
  height: 25rem;
  box-shadow: 2px 2px 8px 2px #34495e;
  margin-bottom: 1rem;
  border-radius: 3px;
  color: #34495e;

  .header {
    background-color: #2980b9;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .sub-header {
    background-color: rgba(0, 0, 0, 0.1);
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #34495e;
    position: relative;

    .currency-symbol {
      // font-weight: bold;
      font-size: 1rem;
      margin-right: 0.3rem;
    }

    .main-price {
      // font-size: 150%;
      // font-weight: bold;
      font-size: 3rem;
    }

    .decimal-part {
      // font-weight: bold;
      font-size: 1rem;
      margin-left: 0.3rem;
    }
    .sub-mo {
      position: absolute;
      bottom: 1.7rem;
      right: 5.8rem;
      font-style: italic;
    }
  }
  .card-ul {
    margin: 0;
    padding: 0;

    .card-li {
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      text-transform: capitalize;
      padding: 0.25rem 1rem 0.25rem 1rem;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    }
  }
  .btn {
    border: none;
    outline: none;
    background-color: #2980b9;
    height: 2.5rem;
    color: white;
    font-size: bold;
  }
`;

const GasCard = ({ record: { row, id, ...rest } }) => {
  return (
    <GasCardContainer>
      <div className="header">{rest.location}</div>
      <div className="sub-header">
        <sup className="currency-symbol">$</sup>
        <p className="main-price">{rest.price.toString().split('.')[0]}</p>
        <sup className="decimal-part">
          {rest.price.toString().split('.')[1]}
        </sup>
        <p></p>
        <sub className="sub-mo">/mo</sub>
      </div>
      <ul className="card-ul">
        {Object.keys(rest).map((field, index) => (
          <li key={index} className="card-li">
            <p>{field}</p>
            <p>{rest[field]}</p>
          </li>
        ))}
      </ul>
      <button className="btn">view more</button>
    </GasCardContainer>
  );
};

export default GasCard;
