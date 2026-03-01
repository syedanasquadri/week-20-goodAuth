"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  <SessionProvider>
    <RealHome/>
  </SessionProvider>
}

function RealHome(){
    const session = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {session.status === "authenticated" && <button onClick={() => signOut}>Log out</button>}
      {session.status === "unauthenticated" && <button onClick={() => signIn}>Sign in</button>}
    </div>
  );
}
