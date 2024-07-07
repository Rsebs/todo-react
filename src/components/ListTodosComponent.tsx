import { Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

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
  onDeleteTodo,
}: Props) => {
  return (
    <>
      <p>{title}</p>

      <ul>
        {listTodos.map((todo) => (
          <li key={todo.id} style={{ color: todo.completed ? 'green' : 'red' }}>
            {todo.text}
            <Button
              variant="text"
              color={todo.completed ? 'warning' : 'success'}
              onClick={() => onCompleteTodo(todo)}
            >
              {todo.completed ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <CheckCircleOutlineOutlinedIcon />
              )}
            </Button>
            <Button
              variant="text"
              color="error"
              onClick={() => onDeleteTodo(todo)}
            >
              <DeleteOutlineOutlinedIcon />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
