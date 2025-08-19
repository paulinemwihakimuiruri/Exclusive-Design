"use client";

import Image from "next/image";

const SignUp = () => {
    return (
        <section >
            <div className="flex items-center gap-10">
                <div>
                    <Image src="/Signup.png" alt="Side image" width={805} height={781} />
                </div>
                <div>
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
                   
                </div>
            </div>
        </section>
    )
}

export default SignUp;