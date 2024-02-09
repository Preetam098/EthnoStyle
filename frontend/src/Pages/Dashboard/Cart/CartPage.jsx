import React, { useState } from "react";
import Layout from "../../../Layout/Index";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";
import SimpleReactValidator from "simple-react-validator";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../../../Components/Button";
import { Link } from "react-router-dom";
import {
  getKeyAction,
  checkAction,
} from "../../../Redux/actions/checkoutAction";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const getKey = useSelector((state) => state?.checkoutReducer?.order);
  const order = useSelector((state) => state?.checkoutReducer?.order);
  const SEND_PORT = process.env.REACT_APP_SEND_PORT;
  const getUserData = JSON.parse(localStorage.getItem("User"));
  const validate = new SimpleReactValidator({});
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [BookingData, setBookingData] = useState(
    JSON.parse(localStorage.getItem("bookingCart")) || []
  );
  const [bookingInfo, setBookingInfo] = useState(() => {
    const totalPrice =
      BookingData && BookingData.length > 0
        ? BookingData.reduce((sum, item) => sum + item.price * item.quantity, 0)
        : 0;
    return {
      ...BookingData,
      userDetail: {
        username: getUserData ? getUserData.username : "",
        email: getUserData ? getUserData.email : "",
        mobileNo: getUserData ? getUserData.mobileNo : "",
        dob: getUserData ? getUserData.dob : "",
      },
      totalPrice: totalPrice,
    };
  });
  const [changeTab, setChangeTab] = useState(false);

  const handleChange = (e) => {
    setBookingInfo({
      ...bookingInfo,
      userDetail: {
        ...bookingInfo.userDetail,
        [e.target.name]: e.target.value,
      },
    });
    setError({ ...error, [e.target.name]: "" });
  };

  console.log("getkey", order);

  // const checkoutHandler = async () => {
  //   const { totalPrice } = bookingInfo;
  //   if (validate.allValid()) {
  //     try {
  //       const response = await fetch(`${SEND_PORT}api/checkout`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ amount: totalPrice }),
  //       });
  //       const { order } = await response.json();
  //       console.log("orrrder", order);
  //       const options = {
  //         key: getKey?.key,
  //         amount: totalPrice,
  //         currency: "INR",
  //         name: "Preetam",
  //         description: "Test ",
  //         image: "https://dummyimage.com/250/ffffff/000000",
  //         order_id: order.id,
  //         callback_url: `${SEND_PORT}api/paymentVerification`,
  //         prefill: {
  //           name: "Preetam",
  //           email: "preetam@example.com",
  //           contact: "9999555699",
  //         },
  //         notes: {
  //           address: "Razorpay Corporate Office",
  //         },
  //         theme: {
  //           color: "#121212",
  //         },
  //       };
  //       const razor = new window.Razorpay(options);
  //       razor.open();
  //     } catch (error) {
  //       console.error("Error during checkout:", error);
  //     }
  //   } else {
  //     console.log("nhi chlaa");
  //     validate.showMessages();
  //     setError(validate.errorMessages);
  //   }
  // };

  const checkoutHandler = async () => {
    const { totalPrice } = bookingInfo;
    if (validate.allValid()) {
      dispatch(checkAction(totalPrice, getKey?.key));
      console.log("keyy:", getKey);
    } else {
      console.log("nhi chlaa");
      validate.showMessages();
      setError(validate.errorMessages);
    }
  };

  const handleTabChange = () => {
    setChangeTab(!changeTab);
    if (!changeTab) {
      dispatch(getKeyAction());
    }
  };

  const Inc = (product, index) => {
    product.quantity += 1;
    BookingData[index].quantity = product.quantity;
    setBookingData([]);
    setBookingInfo([]);
    const totalAmount = BookingData?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log("Total amount:", totalAmount);
    setTimeout(() => {
      setBookingData(BookingData);
      setBookingInfo({
        ...bookingInfo,
        totalPrice: totalAmount,
      });
    }, 0);
    localStorage.setItem("bookingCart", JSON.stringify(bookingInfo));
    console.log("booking", BookingData);
  };

  const Dec = (product, index) => {
    product.quantity -= 1;
    BookingData[index].quantity = product.quantity;
    const totalAmount = BookingData?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setBookingData([...BookingData]);
    setBookingInfo({
      ...bookingInfo,
      totalPrice: totalAmount,
    });
    localStorage.setItem("bookingCart", JSON.stringify(bookingInfo));
  };

  const handleRemoveItem = (itemIndex) => {
    const updateBooking = BookingData.filter((_, index) => index !== itemIndex);
    setBookingData(updateBooking);
    localStorage.setItem("bookingCart", JSON.stringify(updateBooking));
  };

  return (
    <div class="bg-gray-100 py-10">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>

      {BookingData.length === 0 ? (
        <div className="text-center">
          <p className=" my-4 text-3xl">Your cart is empty.</p>
          <Link to="/all-products">
            <Button className="mx-auto mt-6" name="Go To Shop" />
          </Link>
        </div>
      ) : (
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {changeTab ? (
              <>
                <div class="mb-6 rounded-lg bg-white p-6 shadow-md ">
                  <div class="mb-4">
                    <label
                      for="username"
                      class="block font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={
                        bookingInfo?.userDetail
                          ? bookingInfo?.userDetail.username
                          : ""
                      }
                      id="username"
                      name="username"
                      class="w-full border rounded-md py-2 px-3"
                    />
                  </div>
                  <div className="">
                    {validate.message(
                      "username",
                      bookingInfo?.userDetail.username,
                      "required"
                    )}
                    {error && (
                      <p className="text-red-500 my-2 text-sm">
                        {error?.username}
                      </p>
                    )}
                  </div>

                  <div class="mb-4">
                    <label
                      for="mobileNo"
                      class="block font-medium text-gray-700"
                    >
                      Mobile No
                    </label>
                    <input
                      type="number"
                      required
                      onChange={handleChange}
                      value={
                        bookingInfo?.userDetail
                          ? bookingInfo?.userDetail.mobileNo
                          : ""
                      }
                      id="mobileNo"
                      name="mobileNo"
                      class="w-full border rounded-md py-2 px-3"
                    />
                  </div>
                  {validate.message(
                    "mobileNo",
                    bookingInfo?.userDetail.mobileNo,
                    "required"
                  )}
                  {error && (
                    <p className="text-red-500 my-2 text-sm">
                      {error?.mobileNo}
                    </p>
                  )}

                  <div class="mb-4">
                    <label for="email" class="block font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleChange}
                      value={
                        bookingInfo?.userDetail
                          ? bookingInfo?.userDetail.email
                          : ""
                      }
                      id="email"
                      required
                      name="email"
                      class="w-full border rounded-md py-2 px-3"
                    />
                  </div>
                  {validate.message(
                    "email",
                    bookingInfo?.userDetail.email,
                    "required"
                  )}
                  {error && (
                    <p className="text-red-500 my-2 text-sm">{error?.email}</p>
                  )}

                  <div class="mb-2">
                    <label
                      for="address"
                      class="block font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      onChange={handleChange}
                      value={
                        bookingInfo?.userDetail
                          ? bookingInfo?.userDetail.address
                          : ""
                      }
                      name="address"
                      required
                      rows="3"
                      class="w-full border rounded-md py-2 px-3"
                    ></textarea>
                  </div>
                  {validate.message(
                    "address",
                    bookingInfo?.userDetail?.address,
                    "required"
                  )}
                  {error && (
                    <p className="text-red-500 mb-4 text-sm">
                      {error?.address}
                    </p>
                  )}

                  <button
                    onClick={checkoutHandler}
                    type="submit"
                    class="bg-[#2b79c2] ring-2 hover:ring-2 ring-[#2b79c2] text-white px-4 py-2 rounded-md"
                  >
                    Book Now
                  </button>
                </div>
              </>
            ) : (
              <>
                {BookingData &&
                  Array.isArray(BookingData) &&
                  BookingData.map((item, index) => {
                    console.log("item");
                    return (
                      <>
                        <div
                          key={index}
                          class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        >
                          <img
                            src={item?.image}
                            alt="product-image"
                            class="w-32 rounded-lg sm:w-20"
                          />
                          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div class="mt-5 sm:mt-0">
                              <h2 class="text-lg font-bold text-gray-900">
                                {item?.title}
                              </h2>
                              <p class="mt-1 text-xs text-gray-700">
                                36EU - 4US
                              </p>
                            </div>
                            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                              <div class="flex items-center border-gray-100">
                                <span
                                  onClick={() => Dec(item, index)}
                                  class="cursor-pointer rounded-l py-1 text-white px-3 bg-[#2b79c2] hover:text-blue-50"
                                >
                                  -
                                </span>
                                {BookingData ? (
                                  <>
                                    <input
                                      class="h-8 w-8 border border-[#2b79c2] bg-white text-center text-xs outline-none"
                                      type="number"
                                      value={bookingInfo[index].quantity}
                                      min="1"
                                      readOnly
                                    />
                                  </>
                                ) : (
                                  "loading"
                                )}
                                <span
                                  onClick={() => Inc(item, index)}
                                  class="cursor-pointer rounded-r text-white py-1 px-3 bg-[#2b79c2] hover:text-blue-50"
                                >
                                  +
                                </span>
                              </div>

                              <div class="flex items-center space-x-4">
                                <p class="text-sm">
                                  {"$"}
                                  {item?.price}
                                </p>

                                <div>
                                  <RxCross2
                                    onClick={() => handleRemoveItem(index)}
                                    className="h-7 w-7 cursor-pointer duration-150 hover:text-red-500 "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </>
            )}
          </div>

          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">
                {"$"}{" "}
                {bookingInfo.totalPrice
                  ? bookingInfo?.totalPrice.toFixed(2)
                  : ""}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">{"$"}0</p>
            </div>
            <hr class="my-4" />
            <div class="flex  justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="text-end">
                <p class="mb-1 text-lg font-bold">
                  {BookingData ? (
                    <>
                      {"$"}{" "}
                      {bookingInfo.totalPrice
                        ? bookingInfo?.totalPrice.toFixed(2)
                        : ""}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            {changeTab ? (
              <button
                onClick={handleTabChange}
                class="flex justify-center items-center mt-6 w-full hover:underline rounded-md bg-[#2b79c2] py-1.5 font-medium text-blue-50 hover:bg-[#417db5]"
              >
                <span>
                  <IoArrowBackOutline className="mx-1" />
                </span>
                Back To Order
              </button>
            ) : (
              <button
                onClick={handleTabChange}
                class="mt-6 w-full hover:underline rounded-md bg-[#2b79c2] py-1.5 font-medium text-blue-50 hover:bg-[#417db5]"
              >
                Check out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout(CartPage);
