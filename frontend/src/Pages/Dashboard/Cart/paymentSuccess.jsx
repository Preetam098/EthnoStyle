import Layout from "../../../Layout/Index";
import { Button } from "../../../Components/Button";
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ConfettiAnimation from "../../../Components/PartyBomb";


// Your main component
const PaymentSuccess = ({ reference }) => {
const searchQuery = useSearchParams()[0]
const refeence  = searchQuery.get("reference")

  return (
    <React.Fragment>
    <div className="h-[400px] relative flex items-center justify-center ">
    <ConfettiAnimation/>
      <div className="absolute m-2 z-50 bg-white p-8 rounded shadow-md max-w-md md:w-96">
        <div className="text-green-600 mb-4">
          {/* Success Icon Animation */}
          <svg
            className="animate-bounce w-8 h-8 mx-auto mb-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
        </div>
        <div className="text-center">
          <div className="text-xl font-semibold mb-4">Payment Success</div>
          <h1 className="text-2xl mb-8">Reference Number: {refeence}</h1>
        </div>
        <div className="text-center">
          <Link to="/dashboard">
            <Button className="mx-auto hover:underline" name="Back To Home">
              {/* Your Button Component */}
            </Button>
          </Link>
        </div>
      </div>
    </div>
</React.Fragment>
  );
};



export default Layout(PaymentSuccess);
