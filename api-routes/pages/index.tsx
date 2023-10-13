import { Inter } from "next/font/google";
import axios from "axios";
import { CheckIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface TodoList {
  todos: Todo[];
}
interface Todo {
  title: string;
  id: number;
}

export default function Home() {
  const [data, setData] = useState<TodoList | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <p>main page of api and route</p>
      <h1>List Of Todos : </h1>

      <section className="lg:w-1/2 w-full mx-auto flex flex-col gap-3 mt-4">
        {data?.todos.map((item: Todo) => {
          return (
            <div
              className="flex justify-between w-full rounded-md bg-slate-900 px-5 py-3"
              key={item.id}
            >
              <p>
                {item.id} - {item.title}
              </p>
              <div className="flex gap-2">
                <button>
                  <CheckIcon className="w-6 h-6 stroke-green-300" />
                </button>
                <button>
                  <TrashIcon className="w-6 h-6 stroke-red-300" />
                </button>
                <button>
                  <PencilIcon className="w-6 h-6 stroke-blue-300" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
