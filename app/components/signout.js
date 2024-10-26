"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function signout() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [volatility, setVolatility] = useState("low");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const ans = income - expenses;
    if (ans >= 10000) {
      alert("Invest madarchod");
    } else {
      alert("Invest dont");
    }
  };

  return (
    <>
      <div className="bg-[#3163c7]">
        <header>
          <nav className="flex items-center justify-between px-4 h-14 bg-gradient-to-r from-indigo-900 to-indigo-800">
            <div className="text-2xl font-semibold text-white">BudgetBliss</div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-base text-white transition-transform cursor-pointer hover:text-indigo-300 hover:scale-150"
            >
              Sign Out
            </button>
          </nav>
        </header>

        <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-white drop-shadow-xl">
          Please fill in the respective details for proper budgeting
        </h2>
        <main className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="income"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Income (₹):
                </label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  placeholder="Enter income"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={(e) => setIncome(Number(e.target.value))} // Update income state
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="expenses"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Expenses (₹):
                </label>
                <input
                  type="number"
                  id="expenses"
                  name="expenses"
                  placeholder="Enter expenses"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={(e) => setExpenses(Number(e.target.value))} // Update expenses state
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Time of Investment:
                </label>
                <select
                  id="time"
                  name="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="6_months">6 Months</option>
                  <option value="1_year">1 Year</option>
                  <option value="3_years">3 Years</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="volatility"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  <span>
                    Volatility <span className="text-red-600">(risk)</span>:
                  </span>
                </label>
                <select
                  id="volatility"
                  name="volatility"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={(e) => setVolatility(e.target.value)} // Update volatility state
                >
                  <option value="low">Low (&lt; 30%)</option>
                  <option value="medium">Medium (30% to 60%)</option>
                  <option value="high">High (&gt; 60%)</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700"
                >
                  Submit!
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
