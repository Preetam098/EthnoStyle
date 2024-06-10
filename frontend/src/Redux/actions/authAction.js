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
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "./index";
import axios from "axios";
import {
  login_url,
  signup_url,
  otp_url,
  verify_otp_url,
  reset_password_url,
  update_profile_url,
} from "../../Utils/endpoints/api";

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

export const authLogin = (payload,callback) => async (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const response = await axios.post(login_url, payload);
    const { token, message, user } = response?.data;
    const userData = JSON.stringify(user);
    localStorage.setItem("AccessToken", token);
    localStorage.setItem("User", userData);
    toast.success(message);
    dispatch({ type: LOG_IN_SUCCESS, payload: response?.data });
    callback()
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: LOG_IN_FAIL, error });
    toast.error(message);
  }
};

export const authOTP = (payload, callback) => async (dispatch) => {
  dispatch({ type: OTP });
  try {
    const response = await axios.post(otp_url, payload);
    console.log("ress", response?.data);
    const { message } = response?.data;
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
    const { message } = response?.data;
    dispatch({ type: PASSWORD_UPDATE_SUCCESS });
    toast.success(message);
    callback();
  } catch (error) {
    const { message } = error?.response.data;
    toast.error(message);
    dispatch({ type: PASSWORD_UPDATE_FAIL });
  }
};

export const resetPassword = (payload, callback) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD });
  try {
    const AccessToken = localStorage.getItem("AccessToken");
    const response = await axios.post(reset_password_url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken}`,
      },
    });
    // const { message } = response?.data;
    toast.success(response?.data?.message);
    dispatch({ type: RESET_PASSWORD_SUCCESS });
    callback();
  } catch (error) {
    console.log("eeee", error?.response?.data);
    // const { message } = error?.response?.data;
    toast.error(error?.response?.data?.message);
    dispatch({ type: RESET_PASSWORD_FAIL, error });
  }
};

export const updateProfile = (payload, callback) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE });
  try {
    const AccessToken = localStorage.getItem("AccessToken");
    const response = await axios.put(update_profile_url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken}`,
      },
    });
    const { message } = response?.data;
    toast.success(message);
    console.log("response", response?.data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: response?.data });
    callback();
  } catch (error) {
    // const { message } = error?.response?.data;
    // toast.error(message);
    console.log("error" , error)
    dispatch({ type: UPDATE_PROFILE_FAIL });
  }
};
