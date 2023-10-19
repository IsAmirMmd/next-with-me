import { signIn, signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div>home page</div>
      {session ? (
        <>
          <p>you are logged in as {session.user?.name}</p>
          <button onClick={() => signOut()}>sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>sign in</button>
      )}
    </main>
  );
}
