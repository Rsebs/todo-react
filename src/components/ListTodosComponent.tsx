interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  title: string;
  listTodos: Todo[];
  onCompleteTodo: (todo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
}

export const ListTodosComponent = ({
  title,
  listTodos,
  onCompleteTodo,
  onDeleteTodo
}: Props) => {
  return (
    <>
      <p>{title}</p>

      <ul>
        {listTodos.map((todo) => (
          <li key={todo.id} style={{ color: todo.completed ? 'green' : 'red' }}>
            {todo.text}
            <button onClick={() => onCompleteTodo(todo)}>
              Toggle Completed
            </button>
            <button onClick={() => onDeleteTodo(todo)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
