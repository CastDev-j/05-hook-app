console.clear();
console.log("UseReducer");

interface ReducerAction {
  type: string;
  payload: any;
}

interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

const initialState: Todo[] = [
  {
    id: 1,
    todo: "Conectar Fentanilo a la vena",
    done: false,
  },
];

const newTodo: Todo = {
  id: 2,
  todo: "Conectar 2 Fentanilos a la vena",
  done: false,
};

const todoReducer = (state = initialState, action?: ReducerAction) => {
  if (action?.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const addTodoAction = (newTodo: Todo) => ({
  type: "[TODO] add todo",
  payload: newTodo,
});

todos = todoReducer(todos, addTodoAction(newTodo));

console.log(todos);
