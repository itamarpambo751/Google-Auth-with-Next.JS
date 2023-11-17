'use client'

import Image from "next/image";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react"

export default function UserInfo() {
    const { status, data: session } = useSession()

    if (status === 'authenticated') {
        return(
            <div className="h-36 w-96 bg-slate-200 flex justify-center items-start flex-col p-5 rounded-lg">
                <Image 
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <span className="flex items-start justify-center gap-2">
                    <strong>User name: </strong>
                    {session.user.name}
                </span>
                <span className="flex items-start justify-center gap-2">
                    <strong>User email: </strong>
                    {session.user.email}
                </span>
            </div>
        )
    }
    return(
        <SignInButton />
    )
}