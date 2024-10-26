"use client"
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

function InvestmentAdvisory() {

    const onSubmit = ()=> {
        redirect('/highinvest')
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-yellow-100">
      <div className="max-w-lg p-8 text-center bg-white border-4 border-red-500 shadow-lg rounded-xl slide-in">


        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-red-100 rounded-full blink">
            <i className="text-4xl text-red-600 fas fa-exclamation-triangle"></i>
          </div>
        </div>
        <h1 className="mb-4 text-2xl font-bold text-red-600">⚠ High-Risk Investment Advisory ⚠</h1>
        <p className="mb-6 text-lg font-semibold leading-relaxed text-gray-700">
          Warning: Investing with low funds may lead to financial risk and potential loss.
        </p>


        <p className="mb-8 text-gray-600">
          We advise building a stable financial foundation before entering the stock market. Consider growing your savings and understanding risk management to avoid unnecessary financial stress.
        </p>

        <button onClick={onSubmit} className="px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-600 hover:-translate-y-1 hover:scale-105">
          Advance anyway
        </button>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Not ready for stocks? <Link href="/lowinvest" className="font-semibold text-green-600 hover:underline">Check safer investment options</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvestmentAdvisory;
