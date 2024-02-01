import {PASSWORD_UPDATE, PASSWORD_UPDATE_SUCCESS, PASSWORD_UPDATE_FAIL } from "../actions/index";

const intialState = {
  loading: false,
};

const forgotReducer = (state = intialState, action) => {
  switch (action.type) {
    case PASSWORD_UPDATE:
      return { ...state, loading: true };
    case PASSWORD_UPDATE_SUCCESS:
      return { ...state, loading: false , };
    case PASSWORD_UPDATE_FAIL:
      return { ...state, loading: false  , data:null};
    default:
      return state;
  }
};

export default forgotReducer;
