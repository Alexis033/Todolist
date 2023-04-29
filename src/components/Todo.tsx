import React from 'react'
import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: () => void
  editing: {
    isEditing: string
    setIsEditing: React.Dispatch<React.SetStateAction<string>>
  }
  onUpdateTitle: ({ id, title }: { id: string; title: string }) => void
}
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted,
  editing,
  onUpdateTitle
}: Props) => {
  const [editedTitle, setEditedTitle] = React.useState(title)
  const inputEditTitle = React.useRef<HTMLInputElement>(null)
  const { isEditing, setIsEditing } = editing
  React.useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === 'Enter') {
      setEditedTitle(editedTitle.trim())
      if (editedTitle !== title) {
        onUpdateTitle({ id, title: editedTitle })
      }
      if (editedTitle === '') {
        onRemoveTodo({ id })
      }
      setIsEditing('')
    }
    if (event.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }
  return (
    <>
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        <label htmlFor={id}> {title}</label>
        <button
          className="destroy"
          onClick={() => {
            onRemoveTodo({ id })
          }}
        />
      </div>
      <input
        ref={inputEditTitle}
        className="edit"
        value={editedTitle}
        onChange={(event) => {
          setEditedTitle(event.target.value)
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing('')
        }}
      />
    </>
  )
}
