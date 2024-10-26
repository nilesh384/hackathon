"use client"
import React,{useEffect} from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function signout() {
  const router = useRouter();
  

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-400">
          <div>
            <button
              onClick={() => signOut({ callbackUrl: "/signup" })}
              className="p-2 bg-red-600 rounded-xl"
            >
              Log Out
            </button>
          </div>
        </div>
    </>
  );
}
