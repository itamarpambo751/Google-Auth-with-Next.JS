import Image from "next/image";

export default function SignInButton() {
    return(
        <button className="flex items-center h-10 shadow-xl gap-4 pl-3">
            <Image src="/google-logo.png" height={50} width={50} alt="google-logo" />
            <span className="h-full bg-blue-500 flex justify-center items-center px-3 text-white">Sign in With Google</span>
        </button>
    )
}