import { useState } from "react";

interface Todo {
  id: string;
  todo: string;
  done: boolean;
  date: Date;
}

const createTodo = (todo: string): Todo => {
  return {
    id: new Date().getTime().toString(),
    todo,
    done: false,
    date: new Date(),
  };
};

export const TodoAdd = ({
  handleNewTodo,
}: {
    handleNewTodo: (newTodo: Todo) => void;
}) => {
  const [todoInput, setTodoInput] = useState("");

  const saveTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoInput.trim().length <= 0) {
      alert("La tarea no puede estar vacía");
      return;
    }

    const newTodo = createTodo(todoInput);

    handleNewTodo(newTodo);
    setTodoInput("");
  };

  return (
    <form
      onSubmit={saveTodo}
      className="fade-up flex flex-col p-4 gap-8 items-center justify-center w-full bg-purple-50 "
    >
      <div className="flex items-center w-full border-b-2 bg-transparent border-purple-400 text-purple-400 placeholder-purple-400 outline-none focus-within:border-purple-600 transition duration-300">
        <input
          onChange={(e) => setTodoInput(e.target.value)}
          type="text"
          placeholder="Tarea"
          name="todo"
          value={todoInput}
          className="w-full px-2 py-2 bg-transparent outline-none placeholder-purple-400"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full py-2 px-6 bg-purple-100 text-purple-500 rounded-full scale-95 transition-transform ease-in-out active:scale-105 hover:bg-purple-200"
      >
        Agregar Tarea
      </button>
    </form>
  );
};
