import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
  display: flex;
  border: 1px solid #2980b9;
  padding: 0;
  margin: 0;

  li {
  }
`;

function NavBar() {
  return (
    <Nav className="nav-bar">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/protected">view all</Link>
      </li>
      <li>
        <Link to="/gas-levels">view special</Link>
      </li>
    </Nav>
  );
}

export default NavBar;
