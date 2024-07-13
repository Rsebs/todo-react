import { Button, TextField } from '@mui/material';
import { ListTodosComponent } from './components/ListTodosComponent';
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todo, setTodo] = useState('');
  const [listTodos, setListTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onAddTask = (task: string) => {
    if (task === '') {
      alert('No puede agregar una tarea vacía');
      return;
    }

    setListTodos([
      ...listTodos,
      {
        id: Math.ceil(Math.random() * 100000),
        text: task,
        completed: false,
      },
    ]);
    setTodo('');
  };

  const onCompleteTodo = (todo: Todo) => {
    setListTodos(
      listTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const onDeleteTodo = (todo: Todo) => {
    setListTodos(listTodos.filter((t) => t.id !== todo.id));
  };

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
          onKeyDown={(e) => e.key === 'Enter' && onAddTask(todo)}
        />
        <Button
          color="success"
          variant="contained"
          onClick={() => onAddTask(todo)}
        >
          Agregar tarea
        </Button>
      </div>

      <div className="flex gap-3">
        <ListTodosComponent
          title="Por hacer"
          listTodos={listTodos.filter((todo) => !todo.completed)}
          onCompleteTodo={onCompleteTodo}
          onDeleteTodo={onDeleteTodo}
        />

        <ListTodosComponent
          title="Completadas"
          listTodos={listTodos.filter((todo) => todo.completed)}
          onCompleteTodo={onCompleteTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </div>
    </>
  );
};

export default App;
