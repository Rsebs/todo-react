import { useState } from 'react';
import { ListTodosComponent } from './components/ListTodosComponent';
import { ButtonComponent } from './components/ButtonComponent';

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

      <input type="text" value={todo} onChange={handleChange} />
      <ButtonComponent label="Agregar" onClick={() => onAddTask(todo)} />
    </>
  );
};

export default App;
