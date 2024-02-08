import React, { useState } from "react";
import Layout from "../../../Layout/Index";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const CartPage = () => {
  const SEND_PORT = process.env.REACT_APP_SEND_PORT;
  const location = useLocation();
  const [key, setKey] = useState("");
  const BookingData = location.state || {};
  const [num, setNum] = useState(1);
  const [bookingInfo, setBookingInfo] = useState({
    ...BookingData,
    userDetail: {},
    qty: num,
    totalPrice: BookingData?.price,
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
  };

console.log("bookingdata" , BookingData)

  const checkoutHandler = async () => {
    const { totalPrice } = bookingInfo;
    const { name, email, mobileNo, address } = bookingInfo?.userDetail;
    console.log("first", totalPrice);
    if ((!name, !email, !mobileNo, !address)) {
      toast.error("please fill all Fileds");
    } else {
      try {
        const getKey = await fetch(`${SEND_PORT}api/getkey`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await getKey.json();
        console.log("get", data);

        setKey(data.key);
        console.log("keyy:", key);
        const response = await fetch(`${SEND_PORT}api/checkout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalPrice }),
        });
        const { order } = await response.json();
        console.log("orrrder", order);
        const options = {
          key: key,
          amount: totalPrice,
          currency: "INR",
          name: "Preetam",
          description: "Test ",
          image: "https://dummyimage.com/250/ffffff/000000",
          order_id: order.id,
          callback_url: `${SEND_PORT}api/paymentVerification`,
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
      } catch (error) {
        console.error("Error during checkout:", error);
      }
    }
  };

  const Inc = () => {
    setNum(num + 1);
    const updatePrice = BookingData?.price * (num + 1);
    setBookingInfo({
      ...BookingData,
      qty: num,
      totalPrice: updatePrice,
    });
  };

  const Dec = () => {
    if (num > 1) {
      setNum(num - 1);
      const updatePrice = BookingData?.price * (num - 1);
      setBookingInfo({
        ...BookingData,
        qty: num,
        totalPrice: updatePrice,
      });
    } else {
      alert("you can't apply less than 1");
    }
  };

  const handleCheckout = () => {
    setChangeTab(!changeTab);
  };

  console.log("booo", bookingInfo);
  return (
    <div class="bg-gray-100 py-10">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>


        {/* <div className="fle justify-center items-center">
          <h1 className="text-3xl"> No Items In This Cart</h1>
        </div> */}
    
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {changeTab ? (
              <>
                <div class="mb-6 rounded-lg bg-white p-6 shadow-md ">
                  <div class="mb-4">
                    <label for="name" class="block font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={bookingInfo?.name}
                      id="name"
                      name="name"
                      class="w-full border rounded-md py-2 px-3"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="mobile" class="block font-medium text-gray-700">
                      Mobile No
                    </label>
                    <input
                      type="number"
                      required
                      onChange={handleChange}
                      value={bookingInfo?.mobileNo}
                      id="mobile"
                      name="mobile"
                      class="w-full border rounded-md py-2 px-3"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="email" class="block font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleChange}
                      value={bookingInfo?.email}
                      id="email"
                      required
                      name="email"
                      class="w-full border rounded-md py-2 px-3"
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      for="address"
                      class="block font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      onChange={handleChange}
                      value={bookingInfo?.address}
                      name="address"
                      required
                      rows="3"
                      class="w-full border rounded-md py-2 px-3"
                    ></textarea>
                  </div>

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
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img
                    src={BookingData?.image}
                    alt="product-image"
                    class="w-32 rounded-lg sm:w-20"
                  />
                  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                      <h2 class="text-lg font-bold text-gray-900">
                        {BookingData?.title}
                      </h2>
                      <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div class="flex items-center border-gray-100">
                        <span
                          onClick={Dec}
                          class="cursor-pointer rounded-l py-1 text-white px-3 bg-[#2b79c2] hover:text-blue-50"
                        >
                          -
                        </span>
                        <input
                          class="h-8 w-8 border border-[#2b79c2] bg-white text-center text-xs outline-none"
                          type="number"
                          value={num}
                          min="1"
                        />
                        <span
                          onClick={Inc}
                          class="cursor-pointer rounded-r text-white py-1 px-3 bg-[#2b79c2] hover:text-blue-50"
                        >
                          +
                        </span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <p class="text-sm">
                          {"$"}
                          {BookingData?.price}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
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
                  {"$"}{" "}
                  {bookingInfo.totalPrice
                    ? bookingInfo?.totalPrice.toFixed(2)
                    : ""}
                </p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              class="mt-6 w-full rounded-md bg-[#2b79c2] py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Check out
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default Layout(CartPage);
