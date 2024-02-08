import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../actions";

export const RESET_USER_DATA = 'RESET_USER_DATA';

const intialState = {
  loading: false,
};

const resetReducer = (state = intialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return { ...state, loading: false };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, loading: true, };
    case RESET_PASSWORD_FAIL:
      return { ...state, loading: false };
      case RESET_USER_DATA:
      return { ...state, userData: { oldPassword: '', newPassword: '', confirmPassword: '' } };
    default:
      return state;
  }
};


export default resetReducer;
