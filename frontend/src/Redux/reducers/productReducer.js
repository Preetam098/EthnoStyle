import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../actions/index";

const intialState = {
  loading: false,
  product:[],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, loading: false , product:action?.payload  };
    case GET_PRODUCT_FAIL:
      return { ...state, loading: false  , };
    default:
      return state;
  }
};

export default productReducer;
