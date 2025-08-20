"use client";

import Button from "@/shared-components/Button";
import Image from "next/image";
import Link from "next/link";

const LogIn = () => {
    return (
        <section className="max-w-7xl  mx-auto w-full pt-10 pb-13 justify-center">
            <div className="flex items-center gap-10">
                <div>
                    <Image src="/Signup.png" alt="Side image" width={805} height={781} />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-400 border-b">Email or Phone Number</p>
                        <p className="text-gray-400 border-b">Password</p>
                    </div>
                    <div className="flex justify-center gap-10">
                        <Button text="Log in"/>
                        <p className="flex items-center justify-center text-red-600">Forgot Password</p>
                    </div>           
                </div>
            </div>
        </section>
    )
}

export default LogIn;