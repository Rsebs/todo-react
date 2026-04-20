import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { Todo } from '../types/todo.type'

interface TodoState {
  todos: Todo[]
  addTodo: (todo: string) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number) => void
}

export const useTodo = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title: string) => {
        if (title === '') {
          alert('No puede agregar una tarea vacía')
          return
        }

        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Math.ceil(Math.random() * 100000),
              title,
              completed: false,
            },
          ],
        }))
      },
      deleteTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
