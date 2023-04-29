import React from 'react'
import { type TodoTitle } from '../types'
interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ onAddTodo }: Props) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onAddTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        placeholder="New todo"
        autoFocus
      />
    </form>
  )
}
