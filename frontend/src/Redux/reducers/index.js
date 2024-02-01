import { combineReducers } from "redux";
import authReduce from "./authReducer";
import signReduce from "./signReducer";
import otpReducer from "./otpReducer";

const rootReducer = combineReducers({
  authReduce,
  signReduce,
  otpReducer,
});

export default rootReducer;
