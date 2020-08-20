import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const AppLoader = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ isLoading }) => (
  <>
    {isLoading && (
      <AppLoader>
        <Loader type="Puff" color="#34495e" height="60" width="60" />
        <p>Loading Data</p>
      </AppLoader>
    )}
  </>
);
