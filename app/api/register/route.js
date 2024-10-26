import { connectMongoDB } from "@/app/lib/mongodb.js";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import User from "@/models/user.js"; // Adjust path as needed


export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    //hashing the password so we don't see the password
    const hashedPassword = await bcrypt.hash(password, 10); 

    await connectMongoDB();
    await User.create({name, email, password: hashedPassword}); 


    return NextResponse.json({ message: "Usser Signed up" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error while signing up" },
      { status: 500 }
    );
  }
}