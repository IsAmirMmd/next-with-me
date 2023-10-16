import { todos } from "@/data/todos";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  todos: {
    id: number;
    title: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const newTodo = {
      id: Date.now(),
      title: req.body.todo,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: "new todo added", todos });
  } else if (req.method === "GET") {
    return res.status(200).json({
      message: "data fetched",
      todos,
    });
  }
}
