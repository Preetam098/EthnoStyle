import { OTP, OTP_SUCCESS, OTP_FAIL } from "../actions/index";

const intialState = {
  loading: false,
  data:null,
};

const otpReducer = (state = intialState, action) => {
  switch (action.type) {
    case OTP:
      return { ...state, loading: true };
    case OTP_SUCCESS:
      return { ...state, loading: false , data:action?.payload  };
    case OTP_FAIL:
      return { ...state, loading: false  , data:null};
    default:
      return state;
  }
};

export default otpReducer;
