import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Index";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../../Redux/actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Layout/Header/Header";
import toast , {Toaster} from "react-hot-toast";

const NewDrops = () => {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [booking, setBooking] = useState([]);
  const product = useSelector((state) => state?.productReducer?.product);

  const handleAddtoCart = (product) => {
    console.log("prrrr" , product)
    const { title, price, id , image  } = product;
    const existingProduct = booking.findIndex((item) => item.id === id);
    if (existingProduct !== -1) {
      const updateBooking = [...booking];
      updateBooking[existingProduct].quantity += 1;
      setBooking(updateBooking);
      console.log("1st")
      toast.success("Product Added To Cart")
    } else {
      const newProduct = { title, price, id, image, quantity: 1 };
        setBooking([...booking, newProduct]);
        toast.success("Product Added To Cart");

        const updatedCart = [...booking, newProduct];
        localStorage.setItem("bookingCart", JSON.stringify(updatedCart));
        console.log("2nd");
    }
  };
  console.log("booking", booking);

  const Inc = (productId) => {
    setBooking((prevBooking) => {
      const updatedBooking = prevBooking.map((bookingItem) => {
        if (bookingItem.id === productId) {
          return { ...bookingItem, quantity: bookingItem.quantity + 1 };
        }
        return bookingItem;
      });
      localStorage.setItem("bookingCart", JSON.stringify(updatedBooking));
      return updatedBooking;
    });
  };

  const Dec = (productId) => {
    setBooking((prevBooking) => {
      const updatedBooking = prevBooking.map((bookingItem) => {
        if (bookingItem.id === productId && bookingItem.quantity > 1) {
          return { ...bookingItem, quantity: bookingItem.quantity - 1 };
        }
        return bookingItem;
      });
      localStorage.setItem("bookingCart", JSON.stringify(updatedBooking));
      return updatedBooking;
    });
  };

  useEffect(() => {
    dispatch(productAction());
  }, []);

  return (
    <div className="px-4 my-10">
         <h1 className="text-2xl  mb-4 font-semibold">
          All Products {" :- "}
        </h1>
      <div className="grid grid-cols-1  place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     
        {product?.map((product, index) => (
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

                <div key={index}>
                  {booking.some((item) => item.id === product.id) ? (
                    <div className="flex items-center border-gray-100">
                      <span
                        onClick={() => Dec(product.id)}
                        className="cursor-pointer rounded-l py-1 text-white px-3 bg-[#2b79c2] hover:text-blue-50"
                      >
                        -
                      </span>
                      <input
                        className="h-8 w-8 border border-[#2b79c2] bg-white text-center text-xs outline-none"
                        type="number"
                        value={
                          booking.find((item) => item.id === product.id)
                            ?.quantity || 0
                        }
                        min="1"
                      />
                      <span
                        onClick={() => Inc(product.id)}
                        className="cursor-pointer rounded-r text-white py-1 px-3 bg-[#2b79c2] hover:text-blue-50"
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
      <Toaster/>
    </div>
  );
};

export default Layout(NewDrops);
