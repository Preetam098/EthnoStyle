import { combineReducers } from "redux";
import authReduce from "./authReducer";
import signReduce from "./signReducer";
import otpReducer from "./otpReducer";
import productReducer from './productReducer'
import bannerReducer from './bannerReducer'

const rootReducer = combineReducers({
  authReduce,
  signReduce,
  otpReducer,
  productReducer,
  bannerReducer,
});

export default rootReducer;
