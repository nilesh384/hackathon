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
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="flex justify-center p-3 font-bold text-white cursor-default bg-slate-600">
            Sign Up
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center max-w-full my-32">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            type="text"
            value={name}
            className="p-1 m-3 text-white rounded-xl bg-slate-500"
          ></input>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Registration Number"
            type="text"
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
          <button className="p-1 bg-blue-600 rounded-xl">SignUp!</button>{" "}
          <br></br>
          <div className="cursor-default">
            Already LoggedIn?{" "}
            <Link className="underline" href="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
