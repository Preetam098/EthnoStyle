import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const isAuth = localStorage.getItem("AccessToken");
  return isAuth ? <Navigate to={"/dashboard"} /> : <Outlet />;
};


export default PublicRoute;
