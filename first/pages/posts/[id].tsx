import { useRouter } from "next/router";

export default function PostByID() {
  const { query } = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>this is my post page with ID - {query.id}</div>
    </main>
  );
}
