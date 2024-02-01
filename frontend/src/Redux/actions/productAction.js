import axios from "axios";
import { get_product_url } from "../../Utils/endpoints/api";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "./index";
import toast from "react-hot-toast";

export const productAction = (callback) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT });
  try {
    const response = await axios.get(get_product_url);
    const product = response?.data;
    console.log("ffffffff", response);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
    callback(response);
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, error });
  }
};
