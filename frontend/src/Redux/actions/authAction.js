import toast from "react-hot-toast";
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  OTP,
  OTP_SUCCESS,
  OTP_FAIL,
  PASSWORD_UPDATE,
  PASSWORD_UPDATE_SUCCESS,  
  PASSWORD_UPDATE_FAIL,
} from "./index";
import axios from "axios";
import { login_url, signup_url, otp_url, verify_otp_url } from "../../Utils/endpoints/api";

export const registerAction = (payload, callback) => async (dispatch) => {
  dispatch({ type: SIGN_UP });
  try {
    const response = await axios.post(signup_url, payload);
    console.log("resp", response);
    const { message } = response?.data;
    dispatch({ type: SIGN_UP_SUCCESS });

    toast.success(message);
    callback();
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: SIGN_UP_FAIL });
    toast.error(message);
  }
};

export const authLogin = (payload, callback) => async (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const response = await axios.post(login_url, payload);
    const { token, message } = response.data;
    dispatch({ type: LOG_IN_SUCCESS });
    toast.success(message);
    localStorage.setItem("AccessToken", token);
    callback();
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: LOG_IN_FAIL });
    toast.error(message);
  }
};

export const authOTP = (payload, callback) => async (dispatch) => {
  dispatch({ type: OTP });
  try {
    const response = await axios.post(otp_url, payload);
    console.log("ress", response?.data);
    const { message, } = response?.data;
    dispatch({ type: OTP_SUCCESS, payload: response?.data });
    toast.success(message);
    callback(response?.data?.userId);
  } catch (error) {
    const { message } = error?.response?.data;
    toast.error(message);
    dispatch({ type: OTP_FAIL });
  }
};

export const forgotPassword = (payload, callback) => async (dispatch) => {
  dispatch({ type: PASSWORD_UPDATE });
  try {
    const response = await axios.post(verify_otp_url, payload);
    console.log("ress", response?.data);
    const { message, } = response?.data;
    dispatch({ type: PASSWORD_UPDATE_SUCCESS,});
    toast.success(message);
    callback();
  } catch (error) {
    const { message } = error?.response.data;
    toast.error(message);
    dispatch({ type: PASSWORD_UPDATE_FAIL });
  }
};


