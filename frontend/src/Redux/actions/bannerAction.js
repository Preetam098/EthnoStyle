import { BANNER_LIST, BANNER_LIST_SUCCESS, BANNER_LIST_FAIL } from "./index";
import axios from "axios";
import { get_banner_list } from "../../Utils/endpoints/api";

export const bannerListAction = (callback) => async (dispatch) => {
  dispatch({ type: BANNER_LIST });
  try {
    const response = await axios.get(get_banner_list);
    console.log("reee" , response)
    dispatch({ type: BANNER_LIST_SUCCESS , payload:response?.data });
    callback();
  } catch (error) {
    dispatch({ type: BANNER_LIST_FAIL , error });
  }
};
