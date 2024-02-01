import {SIGN_UP,
SIGN_UP_SUCCESS,
SIGN_UP_FAIL,
} from "../actions/index";

const intialState = {
    loading: false,
  };
  

const signReduce = (state = intialState, action) => {
    switch (action.type) {
      case SIGN_UP:
        return { ...state, loading: true };
      case SIGN_UP_SUCCESS:
        return { ...state, loading: false };
      case SIGN_UP_FAIL:
        return { ...state, loading: false };
      default:
        return state;
    }
  }

  
  export default signReduce