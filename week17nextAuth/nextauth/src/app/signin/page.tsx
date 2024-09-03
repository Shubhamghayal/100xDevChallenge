"use client";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Signin() {
    const router = useRouter();
    
    return (
        <div>
            <button onClick={async () => {
                await signIn("google");
            }}>
                Login with Google
            </button>

            <br />

            <button onClick={async () => {
                await signIn("github");
            }}>
                Login with Github
            </button>

            <br />

            <button onClick={async () => {
                const res = await signIn("credentials", {
                    username: "", // Add username here
                    password: "", // Add password here
                    redirect: false,
                });

                if (res?.ok) {
                    router.push("/");
                } else {
                    console.error(res?.error);
                    // Handle error (e.g., display a message to the user)
                }
            }}>
                Login with Email
            </button>
        </div>
    );
}
