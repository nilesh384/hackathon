"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const page = () => {
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

        router.replace("homepage");
      } catch (err) {
        console.log(error);
      }
    };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-purple-200 font-poppins">
        {/* Login form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white border-2 border-purple-700 rounded-lg shadow-lg">
          <h1 className="p-3 text-lg font-bold text-center bg-white rounded-t-lg text-slate-600">
            Log In
          </h1>

          <div className="flex flex-col items-center mt-6 space-y-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="text"
              value={email}
              className="w-full p-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="w-full p-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button className="w-full p-2 mt-4 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Log In!
            </button>

            <div className="mt-4 text-sm text-gray-700">
              New User?{" "}
              <Link href="/signup" className="font-semibold text-blue-600 hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
