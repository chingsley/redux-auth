import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  margin-bottom: 4rem;
  // box-shadow: inset 0 -20px 20px -30px #34495e;
  box-shadow: 0 20px 20px -28px #34495e;
  border-bottom: 1px solid transparent;

  ul {
    display: flex;
    // border: 1px solid #2980b9;
    padding: 0;
    margin: 2rem auto;
    justify-content: flex-end;
    width: 90vw;

    li:not(:last-child) {
      margin-right: 1.3rem;
    }

    a {
      color: #34495e;
      font-size: 14px;
    }
  }
`;

function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Gas Listing</Link>
        </li>
        <li>
          <Link to="/gas-levels">Special Listing</Link>
        </li>
        <li>
          <Link to="/gas-price-histogram">View Chart</Link>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
