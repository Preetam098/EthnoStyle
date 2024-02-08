import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Index";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../../Redux/actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Layout/Header/Header";

const NewDrops = () => {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [booking, setBooking] = useState([]);

  const product = useSelector((state) => state?.productReducer?.product);

  const handleAddtoCart = (product) => {
    const { title, price, id } = product;
    const existingProduct = booking.findIndex((item) => item.id === id);
    if (existingProduct !== -1) {
      const updateBooking = [...booking];
      updateBooking[existingProduct].quantity += 1;
      setBooking(updateBooking);
    } else {
      setBooking([...booking, { title, price, id, quantity:1 }]);
    }
    localStorage.setItem("bookingCart", JSON.stringify(booking));
  };
  console.log("booking", booking);

  const handleBuy = () => {
    navigate("/cart", { state: booking });
  };

  console.log("booking", booking);

  const Inc = () => {
    setBooking(prevBooking => {
      const updatedBooking = prevBooking.map(bookingItem => {
        const matchProduct = product.find(
          productItem => productItem.id === bookingItem.id
        );
        if (matchProduct) {
          return { ...bookingItem, quantity: bookingItem.quantity + 1 };
        }
        return bookingItem;
      });
      localStorage.setItem("bookingCart", JSON.stringify(updatedBooking));
      return updatedBooking;
    });
    setNum(num + 1);
  };

  const Dec = () => {
    if (num > 1) {
      setNum(num - 1);
      setBooking(prevBooking => {
        const updatedBooking = prevBooking.map(bookingItem => {
          const matchProduct = product.find(
            productItem => productItem.id === bookingItem.id
          );
          if (matchProduct) {
            return { ...bookingItem, quantity: bookingItem.quantity - 1 };
          }
          return bookingItem;
        });
        localStorage.setItem("bookingCart", JSON.stringify(updatedBooking));
        return updatedBooking;
      });
    }
  };

  useEffect(() => {
    dispatch(productAction());
  }, []);

  return (
    <div className=" my-10">
      <div className="grid grid-cols-1  place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {product?.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              className="w-40 h-48 object-cover mx-auto object-center"
              alt={product.name}
            />

            <div className="p-4">
              <h3 className="text-md font-medium text-[#2b79c2]">
                {product.title}
              </h3>
              <p className="text-[#2b79c2] text-sm capitalize">
                {product.category}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold text-[#2b79c2]">
                  ${product.price}
                </span>

                <div>
                  {booking.some((item) => item.id === product.id) ? (
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
                        value={booking.map((item) => item.quantity)}
                        min="1"
                      />
                      <span
                        onClick={Inc}
                        class="cursor-pointer rounded-r text-white py-1 px-3 bg-[#2b79c2] hover:text-blue-50"
                      >
                        +
                      </span>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-[#2b79c2] rounded-full hover:bg-[#1d5d8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b79c2]"
                      onClick={() => {
                        handleAddtoCart(product);
                      }}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout(NewDrops);
