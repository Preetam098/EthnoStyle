import { lazy } from "react";
import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import ForgotPassword from "../Pages/Login/ForgotPassword";
const Login = lazy(() => import("../Pages/Login/login"));
const Register = lazy(() => import("../Pages/Register/register"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const Tops = lazy(() => import("../Pages/Dashboard/Tops/tops"));
const Bottom = lazy(() => import("../Pages/Dashboard/Bottom/bottom"));
const Accessories = lazy(() => import("../Pages/Dashboard/Accessories/accessories"));
const Drop = lazy(() => import("../Pages/Dashboard/NewDrops/newDrops"));
const Cart = lazy(() => import("../Pages/Dashboard/CartPage"));
const PaymentSuccess = lazy(() => import("../Pages/Dashboard/Cart/paymentSuccess"));

const AllRoutes = [
  {
    name: "Login",
    path: "/",
    element: <Login />,
    private: false,
  },
  {
    name: "ForgotPassword",
    path: "/forgot-password",
    element: <ForgotPassword />,
    private: false,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
    private: false,
  },
 
 
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    private: true,
  },
  {
    name: "newDrops",
    path: "/all-products",
    element: <Drop />,
    private: true,
  },
  {
    name: "Tops",
    path: "/tops",
    element: <Tops />,
    private: true,
  },
  {
    name: "Bottom",
    path: "/bottom",
    element: <Bottom />,
    private: true,
  },
  {
    name: "Accessories",
    path: "/accessories",
    element: <Accessories />,
    private: true,
  },
  {
    name: "Cart",
    path: "/cart",
    element: <Cart />,
    private: true,
  },
  {
    name: "PaymentSuccess",
    path: "/pay-done",
    element: <PaymentSuccess />,
    private: true,
  },
];

export default AllRoutes;
