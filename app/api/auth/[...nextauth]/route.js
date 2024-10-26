import { connectMongoDB } from "@/app/lib/mongodb.js";
import User from "@/models/user.js";
import NextAuth from "next-auth/next";
import  CredentialsProvider from 'next-auth/providers/credentials'
import  bcrypt from 'bcryptjs'


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "appregister",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB()
                    const user = await User.findOne({email});

                    if (!user) {
                        return null; //If the user does not exist return invalid credentials
                    }

                    const passMatch = await bcrypt.compare(password, user.password);

                    if (!passMatch) {
                        return null;
                    } 
                    return user;
                } catch(err) {
                    console.log(err);
                }
            }
        })
    ],
    session: {
        startegy: "jwt",
    },
    secret:  process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};