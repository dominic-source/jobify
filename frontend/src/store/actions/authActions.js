import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../types';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.error });
  }
};
