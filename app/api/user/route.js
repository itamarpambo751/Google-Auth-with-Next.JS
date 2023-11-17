import { connectToMongodb } from "@/lib/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(request) {
    const { name, email } = await request.json()
    await connectToMongodb()
    await User.create({ name, email })
    return NextResponse.json({ message: 'User created!' }, { status: 201 })
}