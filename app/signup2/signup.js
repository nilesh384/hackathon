"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Routing after signup to login
  const router = useRouter();
  

  //Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password || !email) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User sign up failed");
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-purple-200 font-poppins">
      {/* Sign up form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white border-2 border-purple-700 rounded-lg shadow-lg">
        <h1 className="p-3 text-lg font-bold text-center text-white rounded-t-lg bg-slate-600">
          Sign Up
        </h1>
        
        <div className="flex flex-col items-center justify-center my-8 space-y-4">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            type="text"
            value={name}
            className="w-full p-3 text-gray-800 placeholder-gray-600 bg-slate-100 rounded-xl focus:outline-none"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Set Email"
            type="text"
            value={email}
            className="w-full p-3 text-gray-800 placeholder-gray-600 bg-slate-100 rounded-xl focus:outline-none"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
            className="w-full p-3 text-gray-800 placeholder-gray-600 bg-slate-100 rounded-xl focus:outline-none"
          />
          
          <button type="submit" className="w-full p-3 text-white transition-colors duration-200 bg-blue-600 rounded-xl hover:bg-blue-700">
            Sign Up!
          </button>

          <div className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-blue-500 underline hover:text-purple-500">
                Login
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default page;
