import React from 'react'
import { useTodos } from './hooks/useTodos'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { End } from './components/End'

function App(): JSX.Element {
  const {
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
  } = useTodos()

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />
        <Todos
          todos={todosToRender}
          onRemoveTodo={handleRemove}
          onToggleCompleted={handleCompleted}
          onUpdateTitle={handleUpdateTitle}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filtersSelected={filtersSelected}
          handleFilterChange={handleFilterChange}
          onClearCompleted={handleRemoveAllCompleted}
        />
      </div>
      <End />
    </>
  )
}

export default App
