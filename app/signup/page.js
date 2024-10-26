import React from 'react'
import Signup from '@/app/signup2/signup.js'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const page = async() => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect ("/homepage")
  }
  return (
    <Signup />
  )
}

export default page