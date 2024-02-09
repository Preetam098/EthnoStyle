import axios from "axios";
import {
  FETCH_KEY,
  FETCH_KEY_SUCCESS,
  FETCH_KEY_FAIL,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
} from "./index";
import { get_key_url, send_payment_url } from "../../Utils/endpoints/api";
import toast from "react-hot-toast";

export const getKeyAction = (payload) => async (dispatch) => {
  dispatch({ type: FETCH_KEY });
  try {
    const response = await axios.get(get_key_url, payload);
    console.log("ress", response?.data);
    dispatch({ type: FETCH_KEY_SUCCESS, payload: response?.data });
  } catch (error) {
    if (error.response && error.response.data) {
      const { message } = error.response.data;
      console.error("Error message:", message);
    } else {
      console.error("Error occurred:", error);
    }
    dispatch({ type: FETCH_KEY_FAIL, payload: error });
  }
};

export const checkAction = (totalPrice, key) => async (dispatch) => {
  dispatch({ type: CHECKOUT_REQUEST });
  try {
    const response = await axios.post(send_payment_url, {
      amount: totalPrice,
    });
    console.log("ress", response?.data);
    const { order, message } = response?.data;
    toast.success(message);
    const totalPriceInPaise = Math.max(Math.round(totalPrice * 100), 100);
    const options = {
      key: key,
      amount: totalPriceInPaise,
      currency: "INR",
      name: "Preetam",
      description: "Test ",
      image: "https://dummyimage.com/250/ffffff/000000",
      order_id: order.id,
      callback_url: `http://localhost:5000/api/paymentVerification`,
      prefill: {
        name: "Preetam",
        email: "preetam@example.com",
        contact: "9999555699",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    dispatch({ type: CHECKOUT_SUCCESS, payload: order });
  } catch (error) {
    if (error.response && error.response.data) {
      const { message } = error.response.data;
      console.error("Error message:", message);
    } else {
      console.error("Error occurred:", error);
    }
    dispatch({ type: CHECKOUT_FAIL, payload: error.message });
  }
};
