import { TodoItem } from "./TodoItem";

interface Todo {
  id: string;
  todo: string;
  done: boolean;
  date: Date;
}

export const TodoList = ({
  todos,
  handleDeleteTodo,
  handleToggleTodo,
}: {
  todos: Todo[];
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
}) => {
  return (
    <ul className="fade-up flex flex-col gap-4 items-center justify-center w-full bg-purple-50 p-4">
      {/* Todo Item */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>
      ))}
    </ul>
  );
};
