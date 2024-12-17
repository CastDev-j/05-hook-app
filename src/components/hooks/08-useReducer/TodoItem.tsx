import { FaTrash } from "react-icons/fa";

interface Todo {
  id: string;
  todo: string;
  done: boolean;
  date: Date;
}

export const TodoItem = ({
  handleDeleteTodo,
  handleToggleTodo,
  id,
  done,
  date,
  todo,
}: {
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
  id: string;
  done: boolean;
  todo: string;
  date: Date;
}) => {
  return (
    <li
      key={id}
      className="grid grid-cols-3 gap-4 p-2 w-full bg-purple-100 text-purple-400 rounded-lg shadow-sm text-center"
    >
      <div className="col-span-3 text-sm flex gap-4 justify-end items-center">
        <p>Marcar como:</p>
        <button
          onClick={() => handleToggleTodo(id)}
          className="text-purple-500 bg-purple-200 rounded-md p-2 col-span-1 flex justify-center items-center transition-transform ease-in-out active:scale-95 hover:bg-purple-300"
        >
          {done ? "Hecho" : "Pendiente"}
        </button>
      </div>

      <hr className="col-span-3" />
      <div className="col-span-3 bg-purple-50">{todo}</div>
      <hr className="col-span-3" />

      <div
        className={`col-span-1 flex justify-center items-center ${
          done ? "text-green-400" : "text-red-400"
        }`}
      >
        {done ? "Hecho" : "Pendiente"}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {date.toDateString()}
      </div>
      <button
        onClick={() => handleDeleteTodo(id)}
        className="text-purple-100 bg-purple-900 rounded-md p-2 col-span-1 flex justify-center items-center transition-transform ease-in-out active:scale-95 hover:bg-purple-800"
      >
        <FaTrash />
      </button>
    </li>
  );
};
