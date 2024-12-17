import { useReducer } from "react";
import { todoReducer } from "./08-useReducer/todoReducer";
import { TodoList } from "./08-useReducer/TodoList";
import { TodoAdd } from "./08-useReducer/TodoAdd";

interface Todo {
  id: string;
  todo: string;
  done: boolean;
  date: Date;
}

export const UseReducer = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodo();

  return (
    <section>
      <h1 className="fade-up w-full text-2xl font-semibold text-purple-400 bg-purple-50 py-2 px-12 rounded-lg shadow-sm">
        Aplicación Tareas
      </h1>

      {/* Todo Add */}

      <TodoAdd handleNewTodo={handleNewTodo} />

      <hr />

      <h2 className="fade-up w-full text-xl font-semibold text-purple-400 bg-purple-50 py-2 px-12 rounded-t-lg shadow-sm">
        Lista de Tareas
      </h2>

      <p className="fade-up w-full text-sm font-semibold text-purple-400 bg-purple-50 py-2 px-12 flex justify-between items-center rounded-b-lg shadow-sm">
        <span className="flex gap-4">
          Total: <span className="text-purple-500">
            {todos.length}
          </span>
        </span>
        <span className="flex gap-4">
          {" "}
          Pendientes: <span className="text-red-500">
            {todos.filter((todo) => !todo.done).length}
          </span>
        </span>
      </p>

      {/* Todo List */}

      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </section>
  );
};

const addTodoAction = (todo: Todo) => ({
  type: "[TODO] add todo",
  payload: todo,
});

const deleteTodoAction = (id: string) => ({
  type: "[TODO] delete todo",
  payload: id,
});

const toggleTodoAction = (id: string) => ({
  type: "[TODO] toggle todo",
  payload: id,
});

const initialState: Todo[] = [
  {
    id: "1asdasd",
    todo: "Conectar Fentanilo en Reynosa Tamaulipas Estoy relleando para que se vea mas largo",
    done: false,
    date: new Date(),
  },
  {
    id: "2asdasd",
    todo: "Conectar 2 Fentanilos",
    done: false,
    date: new Date(),
  },
];

const useTodo = () => {
  const [todos, dispatchTodoActions] = useReducer(todoReducer, initialState);

  const handleNewTodo = (newTodo: Todo) => {
    dispatchTodoActions(addTodoAction(newTodo));
  };

  const handleDeleteTodo = (id: string) => {
    dispatchTodoActions(deleteTodoAction(id));
  };

  const handleToggleTodo = (id: string) => {
    dispatchTodoActions(toggleTodoAction(id));
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
