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
        id: listTodos.length + 1,
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

      <TextField
        label="Tu tarea"
        variant="outlined"
        value={todo}
        onChange={handleChange}
      />
      <Button
        color="success"
        variant="outlined"
        onClick={() => onAddTask(todo)}
      >
        Agregar tarea
      </Button>
    </>
  );
};

export default App;
