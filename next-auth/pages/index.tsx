import { signIn, signOut } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div>home page</div>
      <button onClick={() => signIn("github")}>sign in</button>
      <button onClick={() => signOut()}>sign out</button>
    </main>
  );
}
