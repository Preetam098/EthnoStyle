import { combineReducers } from "redux";
import authReduce from "./authReducer";
import signReduce from "./signReducer";
import otpReducer from "./otpReducer";
import productReducer from './productReducer'
import bannerReducer from './bannerReducer'
import resetReducer from "./resetReducer";
import updateReducer from "./updateReducer";
import checkoutReducer from "./checkoutReducers";
const rootReducer = combineReducers({
  authReduce,
  signReduce,
  otpReducer,
  resetReducer,
  productReducer,
  updateReducer,
  bannerReducer,
  checkoutReducer,
});

export default rootReducer;
