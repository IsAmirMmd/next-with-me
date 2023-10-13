import Image from "next/image";
import { Inter } from "next/font/google";
import useSWR from "swr";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

interface Todo {
  title: string;
  id: number;
}

export default function Home() {
  const { data, error } = useSWR("getTodos", async () => {
    const { data } = await axios.get("/api/todos");
    return data;
  });

  if (!data) return <p>loading...</p>;
  if (error) return <p>error in reading data</p>;

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <p>main page of api and route</p>
      <h1>List Of Todos : </h1>

      <section className="w-1/2 mx-auto">
        {data.todos.map((item: Todo) => {
          return (
            <div className="flex justify-between w-full" key={item.id}>
              <p>
                {item.id} - {item.title}
              </p>
              <p>O</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
