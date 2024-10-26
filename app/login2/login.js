"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/homepage");
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 font-poppins">
      {/* Login form container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 transition-transform duration-300 ease-in-out transform bg-white border border-purple-300 shadow-2xl bg-opacity-90 backdrop-blur-md rounded-xl hover:scale-105"
      >
        <h1 className="text-2xl font-bold text-center text-purple-800">Welcome Back!</h1>
        
        <p className="mt-2 text-center text-gray-600">Log in to access your account</p>
        
        {error && <p className="mt-3 text-sm text-center text-red-500">{error}</p>}
        
        <div className="flex flex-col items-center mt-6 space-y-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            value={email}
            className="w-full p-3 text-gray-800 placeholder-gray-600 transition duration-200 transform rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full p-3 text-gray-800 placeholder-gray-600 transition duration-200 transform rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105"
          />
          
          <button
            type="submit"
            className="w-full p-3 font-bold text-white transition-transform duration-200 ease-in-out transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 focus:outline-none"
          >
            Log In!
          </button>

          <div className="mt-4 text-sm text-gray-600">
            New User?{" "}
            <Link href="/signup" className="font-semibold text-purple-600 underline transition-colors duration-200 cursor-pointer hover:text-purple-800">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;