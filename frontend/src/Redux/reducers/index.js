import { combineReducers } from "redux";
import authReduce from "./authReducer";
import signReduce from "./signReducer";
import otpReducer from "./otpReducer";
import productReducer from './productReducer'
import bannerReducer from './bannerReducer'
import resetReducer from "./resetReducer";
import updateReducer from "./updateReducer";

const rootReducer = combineReducers({
  authReduce,
  signReduce,
  otpReducer,
  resetReducer,
  productReducer,
  updateReducer,
  bannerReducer,
});

export default rootReducer;
