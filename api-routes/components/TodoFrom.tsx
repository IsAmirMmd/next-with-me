import { type } from "os";
import React, { useState } from "react";

type Todo = string;

interface submit {
  submitHandler: (event: React.FormEvent, todo: Todo | undefined) => void;
}

const TodoForm = ({ submitHandler }: submit) => {
  const [todo, setTodo] = useState<Todo | undefined>("");

  return (
    <form className="w-1/2 my-4" onSubmit={(e) => submitHandler(e, todo)}>
      <input
        type="text"
        name="todo-content"
        placeholder="add text content"
        value={todo}
        className="w-full text-white rounded-md bg-slate-900 px-5 py-3"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="w-full bg-slate-950 my-2 rounded-md py-2 hover:bg-slate-900 transition-all capitalize"
        type="submit"
      >
        add new todo
      </button>
    </form>
  );
};

export default TodoForm;
