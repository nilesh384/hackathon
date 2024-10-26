import React from 'react'
import Login from '@/app/login2/login.js'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async() => {
    const session = await getServerSession(authOptions);
  if (session) {
    redirect("/homepage");
  }
  return (
    <>
    <Login />
    </>
  )
}

export default page