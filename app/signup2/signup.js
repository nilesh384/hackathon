"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Routing after signup to login
  const router = useRouter();

  // Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password || !email) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        setError("User sign up failed.");
      }
    } catch (err) {
      console.log("Error", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-purple-400 to-blue-300 font-poppins">
      {/* Container with background and shadow */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 transition duration-300 ease-in-out transform bg-white border border-purple-400 shadow-2xl bg-opacity-90 backdrop-blur-md rounded-xl hover:scale-105"
      >
        <h1 className="text-2xl font-bold text-center text-purple-800">Sign Up</h1>
        
        {/* Display error message if any */}
        {error && <p className="mt-2 text-sm text-center text-red-500">{error}</p>}

        <div className="flex flex-col items-center justify-center my-8 space-y-6">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            type="text"
            value={name}
            className="w-full p-3 text-gray-800 placeholder-gray-600 transition duration-200 transform rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            value={email}
            className="w-full p-3 text-gray-800 placeholder-gray-600 transition duration-200 transform rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
            className="w-full p-3 text-gray-800 placeholder-gray-600 transition duration-200 transform rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105"
          />
          
          <button
            type="submit"
            className="w-full p-3 font-bold text-white transition-all duration-200 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-purple-700 hover:from-blue-600 hover:to-purple-700 hover:scale-105 focus:outline-none"
          >
            Sign Up!
          </button>

          <div className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-purple-600 underline transition-colors duration-200 cursor-pointer hover:text-purple-800">
                Login
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;