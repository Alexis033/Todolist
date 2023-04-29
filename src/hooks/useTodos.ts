import React from 'react'
import {
  type ListOfTodos,
  type FilterValue,
  type TodoId,
  type TodoTitle,
  type TodoState
} from '../types'
import { TODO_FILTERS } from '../const'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: true
  }
]
export const useTodos = (): {
  activeCount: number
  completedCount: number
  todosToRender: ListOfTodos
  filtersSelected: FilterValue
  handleRemoveAllCompleted: () => void
  handleCompleted: ({ id, completed }: TodoState) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemove: ({ id }: TodoId) => void
  handleAddTodo: ({ title }: TodoTitle) => void
  handleUpdateTitle: ({ id, title }: { id: string; title: string }) => void
} => {
  const [todos, setTodos] = React.useState<ListOfTodos>(
    JSON.parse(localStorage.getItem('listTodos')) || mockTodos
  )
  const [filtersSelected, setFiltersSelected] = React.useState<FilterValue>(
    () => {
      const params = new URLSearchParams(window.location.search)
      const filter = params.get('filter') as FilterValue | null
      if (filter === null) return TODO_FILTERS.ALL
      return Object.values(TODO_FILTERS).includes(filter)
        ? filter
        : TODO_FILTERS.ALL
    }
  )

  React.useEffect(() => {
    localStorage.setItem('listTodos', JSON.stringify(todos))
  }, [todos])
  const handleCompleted = ({ id, completed }: TodoState): void => {
    const NewTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(NewTodos)
  }
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const handleFilterChange = (filter: FilterValue): void => {
    setFiltersSelected(filter)
    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    )
  }
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  const handleUpdateTitle = ({
    id,
    title
  }: {
    id: string
    title: string
  }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length
  const todosToRender = todos.filter((todo) => {
    if (filtersSelected === TODO_FILTERS.ALL) {
      return todo
    }
    if (filtersSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filtersSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    } else return []
  })

  return {
    activeCount,
    completedCount,
    todosToRender,
    filtersSelected,
    handleRemoveAllCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleAddTodo,
    handleUpdateTitle
  }
}
