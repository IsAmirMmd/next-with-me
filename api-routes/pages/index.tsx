import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoFrom";

const inter = Inter({ subsets: ["latin"] });

interface TodoListProps {
  todos: Todo[] | undefined;
}
interface Todo {
  title: string;
  id: number;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TodoListProps | null>(null);

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

  const submitHandler = (event: React.FormEvent, todo: string | undefined) => {
    event.preventDefault();
    if (!todo) return;
    try {
      axios.post("/api/todos", { todo }).then((res) => setData(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = (id: number) => {
    axios
      .delete(`api/todos/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <p>main page of api and route</p>
      <TodoForm submitHandler={submitHandler} />
      <TodoList deleteHandler={deleteHandler} todos={data?.todos} />
    </main>
  );
}
