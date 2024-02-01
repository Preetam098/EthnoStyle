import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Index";
const Api = "https://fakestoreapi.com/products";

const NewDrops = () => {
  const [products, setProduct] = useState("");
  const [key, setKey] = useState("");
  const [booking, setBooking] = useState({
    title: "",
    price: "",
    id: "",
  });

  console.log("kkkk", key);

  const handleAddtoCart = (product) => {
    console.log("e.target.value", product);
    const { title, price, id } = product;
    setBooking({
      ...booking,
      title,
      price,
      id,
    });
  };

  const checkoutHandler = async (amount) => {
    console.log("ammmmm", amount);

    try {
      const getKey = await fetch("http://localhost:5000/api/getkey", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await getKey.json();
      setKey(data.key);
      console.log("keyy:", key);

      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });
      const { order } = await response.json();
      console.log("orrrder", order);
      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "Preetam",
        description: "Test ",
        image: "https://dummyimage.com/250/ffffff/000000",
        order_id: order.id,
        callback_url: "http://localhost:5000/api/paymentVerification",
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
      console.error("Error during checkout:", error.message);
    }
  };

  console.log("booking", booking);

  const getData = async () => {
    try {
      const response = await fetch(Api, { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-orange-600 text-5xl">Product List</h1>
      <div className="product-list grid grid-cols-4 gap-2 place-content-top place-items-top p-10">
        {products &&
          products.map((product) => (
            <div key={product.id} className="product-item text-center">
              <img
                src={product.image}
                className=" border-2 p-2 border-black my-1"
                alt={product.name}
              />
              <div className="bg-gray-300 p-1 px-auto py-auto text-xl text-black">
                <h3>Product Name :- {product.title}</h3>

                <button className="text-sm rounded-full bg-gray-800 my-2 mx-2 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  {"Price"} ${product.price.toFixed(2)}
                </button>
                <button
                  className="text-sm rounded-full my-2 bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => {
                    handleAddtoCart(product);
                  }}
                >
                  {"Add to Cart"}
                </button>

                <button
                  className="mx-2 text-sm rounded-full my-2 bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => {
                    checkoutHandler(product.price);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Layout(NewDrops);
