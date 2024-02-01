import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../../../Layout/Index";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("reference");


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
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
          <h1 className="text-2xl mb-8">Reference Number: {reference}</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout(PaymentSuccess);

