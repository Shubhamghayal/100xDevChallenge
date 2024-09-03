"use client"

import { signIn,signOut } from "next-auth/react"
export const Appbar=()=>{

    return <div >
            <button onClick={()=>{
                signIn()
            }}>Sign in</button>
            <button onClick={()=>{
                signOut()
            }}>signOut</button>
    </div>
}