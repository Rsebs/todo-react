import { Button } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import type { Todo } from '../types/todo.type'

interface Props {
  title: string
  listTodos: Todo[]
  updateTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

const colorButton = (completed: boolean) => (completed ? 'warning' : 'success')
const iconButton = (completed: boolean) =>
  completed ? (
    <RemoveCircleOutlineOutlinedIcon />
  ) : (
    <CheckCircleOutlineOutlinedIcon />
  )

export const ListTodosComponent = (props: Props) => {
  return (
    <>
      <div className="bg-blue-50 border border-blue-300 rounded-lg min-h-96 w-96">
        <div className="bg-slate-400 p-1">
          <p className="text-md text-center uppercase mb-2 font-semibold">
            {props.title}
          </p>
        </div>

        <div className="p-3">
          <ol>
            {props.listTodos.map((todo) => (
              <li
                key={todo.id}
                className={`grid grid-cols-2 gap-4 ${
                  todo.completed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                <p>
                  <span>- {todo.title}</span>
                </p>
                <div className="flex justify-end items-center">
                  <Button
                    variant="text"
                    color={colorButton(todo.completed)}
                    onClick={() => props.updateTodo(todo.id)}
                  >
                    {iconButton(todo.completed)}
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => props.deleteTodo(todo.id)}
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
  )
}
