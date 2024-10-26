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
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="flex justify-center p-3 font-bold text-white cursor-default bg-slate-600">
            LogIn
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center max-w-full my-32">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Registration Number"
            type="text"
            value={email}
            className="p-1 m-3 text-white rounded-xl bg-slate-500"
          ></input>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="p-1 m-3 text-white rounded-xl bg-slate-500"
          ></input>{" "}
          <br></br>
          <button className="p-1 bg-blue-600 rounded-xl">LogIn!</button>{" "}
          <br></br>
          <div className="cursor-default">
            New User?{" "}
            <Link className="underline" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
