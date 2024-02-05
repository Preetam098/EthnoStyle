import {
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
  } from "../actions";
  
  const intialState = {
    loading: false,
    data:[],
  };
  
  const updateReducer = (state = intialState, action) => {
    switch (action.type) {
      case UPDATE_PROFILE:
        return { ...state, loading: false };
      case UPDATE_PROFILE_SUCCESS:
        return { ...state, loading: true, data:action.payload };
      case UPDATE_PROFILE_FAIL:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  
  export default updateReducer;
  