import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_STATUS_START,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_FAILURE,
} from '../actions';

const initialState = {
  token: null,
  isLoading: false,
  error: '',
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        token: null,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_STATUS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case FETCH_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
