'use client'

import Image from "next/image";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react"

export default function UserInfo() {
    const { status, data: session } = useSession()

    if (status === 'authenticated') {
        return(
            <div className="h-60 w-80 bg-slate-200 flex justify-center items-center flex-col">
                <Image 
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={50}
                    height={50}
                />
            </div>
        )
    }
    return(
        <SignInButton />
    )
}