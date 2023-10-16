import { CheckIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

interface TodoListProps {
  todos: Todo[] | undefined;
  deleteHandler: (id: number) => void;
}

interface Todo {
  title: string;
  id: number;
}

const TodoList = ({ todos, deleteHandler }: TodoListProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1>List Of Todos : </h1>

      <section className="lg:w-1/2 w-full mx-auto flex flex-col gap-3 mt-4">
        {todos?.map((item: Todo) => {
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
                <button onClick={() => deleteHandler(item.id)}>
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
    </div>
  );
};

export default TodoList;
