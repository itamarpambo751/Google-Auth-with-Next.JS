'use client'

import { useSession, signOut, signIn } from "next-auth/react"

export default function NavBar() {
    const { status } = useSession()

    if (status === 'authenticated') {
        return(
            <div className="p-4 flex justify-between items-center shadow-md">
                <h1 className="font-bold text-lg text-blue-500">Itamar</h1>
                <button onClick={() => signOut()} className="bg-slate-900 text-white px-6 py-2 rounded-md">Sign Out</button>
            </div>
        )
    }
    return(
        <div className="p-4 flex justify-between items-center shadow-md">
            <h1 className="font-bold text-lg text-blue-500">Itamar</h1>
            <button onClick={() => signIn("google")} className="bg-slate-900 text-white px-6 py-2 rounded-md">Sign in</button>
        </div>
    )
}