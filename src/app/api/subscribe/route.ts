import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/Users";
import { NextResponse } from "next/server";
export async function POST(request: Request){
    await dbConnect();
    try {
        const { email } = await request.json();
        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Invalid email provided" }, { status: 400 });
        }
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error:"You are already added to the waitlist"});
        }
        const newUser = new User({ email });
        await newUser.save();

        return NextResponse.json({ msg: "You have been added to waitlist" }, { status: 201 });
    } catch (error) {
        console.error("Error saving email:", error);
        return NextResponse.json({ error: "An error occurred while saving the email" }, { status: 500 });
    }
    
}