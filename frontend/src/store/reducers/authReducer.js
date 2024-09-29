import { LOGIN_SUCCESS, LOGIN_FAIL } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return { ...state, isAuthenticated: true, user: action.payload.user, error: null };
    case LOGIN_FAIL:
      return { ...state, isAuthenticated: false, user: null, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
