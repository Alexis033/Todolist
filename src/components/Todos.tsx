import React from 'react'
import { Todo } from './Todo'
import { type TodoId, type ListOfTodos, type TodoState } from '../types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: TodoState) => void
  onUpdateTitle: ({ id, title }: { id: string; title: string }) => void
}
export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
  onUpdateTitle
}: Props) => {
  const [isEditing, setIsEditing] = React.useState('')
  const [parent] = useAutoAnimate()
  return (
    <ul className="todo-list" ref={parent}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''} ${
            isEditing === todo.id ? 'editing' : ''
          }`}
          onDoubleClick={() => {
            setIsEditing(todo.id)
          }}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={() => {
              onToggleCompleted({ id: todo.id, completed: !todo.completed })
            }}
            editing={{ isEditing, setIsEditing }}
            onUpdateTitle={onUpdateTitle}
          />
        </li>
      ))}
    </ul>
  )
}
