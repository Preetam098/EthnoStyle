import React, { Suspense } from "react";
import AllRoutes from "./AllRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Logo from "../Assets/Logo.svg";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <img src={Logo} className="w-44" />
        </div>
      }
    >
      <Toaster />
      <Routes>
        {AllRoutes.map((item) => {
          return (
            <>
              <Route
                key={item.name}
                element={item.private ? <PrivateRoute /> : <PublicRoute />}
              >
                <Route
                  name={item.name}
                  exact={true}
                  path={item.path}
                  element={item.element}
                />
              </Route>
            </>
          );
        })}
      </Routes>
      {/* <Footer/> */}
    </Suspense>
  );
};

export default App;
