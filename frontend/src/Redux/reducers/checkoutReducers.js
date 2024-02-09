import { CHECKOUT_REQUEST, CHECKOUT_FAIL, CHECKOUT_SUCCESS, FETCH_KEY, FETCH_KEY_FAIL, FETCH_KEY_SUCCESS } from "../actions";

const initialState = {
  loading: false,
  order: null,
  error: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
    case FETCH_KEY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHECKOUT_SUCCESS:
    case FETCH_KEY_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        error: null,
      };
    case CHECKOUT_FAIL:
    case FETCH_KEY_FAIL:
      return {
        ...state,
        loading: false,
        order: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
