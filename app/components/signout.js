"use client"
import React,{useEffect} from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function signout() {
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect if not authenticated
    }
  }, [status, router]);
  
  if (status === "loading") {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-400">
        <div className="flex-col justify-center py-6 text-center rounded-lg shadow-xl h-80 w-96 bg-slate-500">
          <div className="h-10">
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div className="h-10">
            email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="p-2 bg-red-600 rounded-xl"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
