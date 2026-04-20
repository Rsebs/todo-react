import { Button, TextField } from '@mui/material'
import { ListTodosComponent } from './components/ListTodosComponent'
import { useState } from 'react'
import { useTodo } from './store/useTodo'

const App = () => {
  const [todo, setTodo] = useState('')
  const { todos, addTodo, deleteTodo, updateTodo } = useTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo(todo)
      setTodo('')
    }
  }

  const handleTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <h1 className="text-3xl text-center mb-9 uppercase">To-Do List</h1>
      <div className="flex flex-col place-items-center gap-6 mb-5">
        <TextField
          label="Tu tarea"
          variant="outlined"
          value={todo}
          fullWidth
          color="primary"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button color="success" variant="contained" onClick={handleTodo}>
          Agregar tarea
        </Button>
      </div>

      <div className="flex gap-3">
        <ListTodosComponent
          title="Por hacer"
          listTodos={todos.filter((todo) => !todo.completed)}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />

        <ListTodosComponent
          title="Completadas"
          listTodos={todos.filter((todo) => todo.completed)}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  )
}

export default App
