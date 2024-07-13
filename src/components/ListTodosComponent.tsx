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
      <div className="bg-blue-50 border border-blue-300 rounded-lg min-h-96 w-96">
        <div className="bg-slate-400 p-1">
          <p className="text-md text-center uppercase mb-2">{title}</p>
        </div>

        <div className="p-3">
          <ol>
            {listTodos.map((todo) => (
              <li
                key={todo.id}
                className={`grid grid-cols-2 gap-4 ${
                  todo.completed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                <p>
                  <span style={{ fontWeight: 'bold' }}>-</span> {todo.text}
                </p>
                <div className="flex justify-end items-center">
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
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};
