'use client';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { FiDollarSign, FiCalendar, FiUser, FiTrendingUp } from 'react-icons/fi';

export default function SignOut() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [volatility, setVolatility] = useState('low');
  const [age, setAge] = useState(0);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const ans = income - expenses;

    if (age < 18) {
      alert('You are not an Adult');
    } else {
      if (ans <= 10000) {
        alert("Invest, don't spend too much!");
      } else if (ans === 0) {
        alert('You have no available balance to invest');
      } else {
        if (volatility === 'low') {
          redirect('/lowinvest');
        } else if (volatility === 'medium') {
          redirect('/midinvest');
        } else if (volatility === 'high') {
          redirect('/highinvest1');
        }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 font-poppins">
      <header>
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gradient-to-r from-indigo-800 to-indigo-900">
          <div className="text-3xl font-bold text-white">BudgetBliss</div>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="text-lg text-white transition-transform transform hover:text-indigo-300 hover:scale-110"
          >
            Sign Out
          </button>
        </nav>
      </header>

      <main className="flex items-center justify-center flex-grow py-12">
        <div className="w-full max-w-lg p-8 transition duration-500 ease-in-out transform bg-white shadow-xl bg-opacity-90 backdrop-blur-xl rounded-xl hover:scale-105">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-purple-700">
            Budgeting Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="income" className="block font-semibold text-gray-700">
                <FiDollarSign className="inline-block mr-2 text-blue-500" />
                Income (₹)
              </label>
              <input
                type="number"
                id="income"
                placeholder="Enter income"
                className="w-full px-4 py-2 mt-1 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </div>

            <div className="relative">
              <label htmlFor="expenses" className="block font-semibold text-gray-700">
                <FiDollarSign className="inline-block mr-2 text-red-500" />
                Expenses (₹)
              </label>
              <input
                type="number"
                id="expenses"
                placeholder="Enter expenses"
                className="w-full px-4 py-2 mt-1 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                onChange={(e) => setExpenses(Number(e.target.value))}
              />
            </div>

            <div className="relative">
              <label htmlFor="time" className="block font-semibold text-gray-700">
                <FiCalendar className="inline-block mr-2 text-green-500" />
                Time of Investment
              </label>
              <select
                id="time"
                className="w-full px-4 py-2 mt-1 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="6_months">6 Months</option>
                <option value="1_year">1 Year</option>
                <option value="3_years">3 Years</option>
              </select>
            </div>

            <div className="relative">
              <label htmlFor="age" className="block font-semibold text-gray-700">
                <FiUser className="inline-block mr-2 text-purple-500" />
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="e.g., 35"
                className="w-full px-4 py-2 mt-1 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </div>

            <div className="relative">
              <label htmlFor="volatility" className="block font-semibold text-gray-700">
                <FiTrendingUp className="inline-block mr-2 text-yellow-500" />
                Volatility (risk)
              </label>
              <select
                id="volatility"
                className="w-full px-4 py-2 mt-1 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
                onChange={(e) => setVolatility(e.target.value)}
              >
                <option value="low">Low (&lt; 30%)</option>
                <option value="medium">Medium (30% to 60%)</option>
                <option value="high">High (&gt; 60%)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
