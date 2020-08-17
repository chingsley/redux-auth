import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token-for-redux-auth-app');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    baseURL: 'http://localhost:5000',
  });
};
