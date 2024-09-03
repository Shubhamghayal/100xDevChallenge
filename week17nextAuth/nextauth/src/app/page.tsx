
"use client"
import Image from "next/image";
import { Appbar } from "../../componets/Appbar";
import { useSession } from "next-auth/react";
export default function Home() {
  const session=useSession()
  return (
    <div>
      <Appbar/>
      <div>{JSON.stringify(session)}</div>
      
    </div>
  );
}
