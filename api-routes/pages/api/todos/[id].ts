import { todos } from "@/data/todos";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  todos: TodoList;
};

interface Todo {
  id: number;
  title: string;
}

type TodoList = Todo[];

let result: TodoList = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  axios;
  if (req.method === "DELETE") {
    const index = todos.findIndex((item: Todo) => item.id === Number(id));
    todos.splice(index, 1);
    return res.status(200).json({ message: "todo deleted !", todos });
  }
}
