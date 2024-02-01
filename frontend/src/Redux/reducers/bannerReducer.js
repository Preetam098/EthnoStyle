import { BANNER_LIST, BANNER_LIST_SUCCESS, BANNER_LIST_FAIL } from "../actions";

const intialState = {
  loading: false,
  list: [],
};
const bannerReducer = (state = intialState, action) => {
  switch (action.type) {
    case BANNER_LIST:
      return { ...state, loading: true };
    case BANNER_LIST_SUCCESS:
      return { ...state, loading: false, list: action?.payload };
    case BANNER_LIST_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default bannerReducer;
