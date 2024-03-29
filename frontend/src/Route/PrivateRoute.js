import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("AccessToken");
  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
