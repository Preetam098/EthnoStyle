import React, { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Logo from "../Assets/Logo.svg";

const Layout = (Component) => {
  return  ()=>(
    <div className="container mx-auto ">
      <Header />
      <div className="h-full my-2">
        <Component />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
