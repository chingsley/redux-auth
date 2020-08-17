import axios from 'axios';
import { axiosWithAuth } from '../../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_STATUS_START = 'FETCH_STATUS_START';
export const FETCH_STATUS_FAILURE = 'FETCH_STATUS_FAILURE';
export const FETCH_STATUS_SUCCESS = 'FETCH_STATUS_SUCCESS';

// export const login = ({ username, password }) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_START });
//     const response = await axios.post(
//       'http://localhost:5000/api/login',
//       { username, password },
//       {}
//     );
//     const {
//       data: { payload },
//     } = response;
//     localStorage.setItem('token-for-redux-auth-app', payload);
//     dispatch({ type: LOGIN_SUCCESS, payload });
//   } catch (err) {
//     dispatch({ type: LOGIN_FAILURE, payload: err.message });
//   }
// };

export const login = ({ username, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/api/login', { username, password }, {})
    .then((response) => {
      const {
        data: { payload },
      } = response;
      localStorage.setItem('token-for-redux-auth-app', payload);
      dispatch({ type: LOGIN_SUCCESS, payload });
    })
    .catch((err) => {
      // console.log(err.message);
      const serverError = err.message.match(/network/i)
        ? 'Ensure the gasoline server is running on port 5000. The gasoline server is located in /Users/kingsleyeneja/study_projects/lambda_backend/gasoline-server'
        : '';
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${err.message}. ${serverError}`,
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token-for-redux-auth-app');
  dispatch({});
};

export const fetchGasListing = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_STATUS_START,
    });
    const url = 'http://localhost:5000/api/data';
    const token = localStorage.getItem('token-for-redux-auth-app');
    const headers = { authorization: token };
    // const response = await axios.get(url, { headers });
    const response = await axiosWithAuth().get(url);
    const {
      data: { data },
    } = response;
    console.log(response.data);
    dispatch({
      type: FETCH_STATUS_SUCCESS,
      payload: data.slice(1, 50),
    });
  } catch (error) {
    const serverError = error.message.match(/network/i)
      ? 'Ensure the gasoline server is running on port 5000. The gasoline server is located in /Users/kingsleyeneja/study_projects/lambda_backend/gasoline-server'
      : '';
    dispatch({
      type: FETCH_STATUS_FAILURE,
      payload: `${error.message}. ${serverError}`,
    });
  }
};

export const FETCH_PRICES_START = 'FETCH_PRICES_START';
export const FETCH_PRICES_SUCCESS = 'FETCH_PRICES_SUCCESS';
export const FETCH_PRICES_FAILURE = 'FETCH_PRICES_FAILURE';
export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_PRICES_START });
  axiosWithAuth()
    .get('/api/data')
    .then((res) => {
      dispatch({ type: FETCH_PRICES_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PRICES_FAILURE });
    });
};
