import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
} from "../actions/index";

const intialState = {
  loading: false,
};

const authReduce = (state = intialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loading: true };
    case LOG_IN_SUCCESS:
      return { ...state, loading: false };
    case LOG_IN_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReduce;
