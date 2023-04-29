import { Filters } from './Filters'
import { type FilterValue } from '../types'
interface Props {
  activeCount: number
  completedCount: number
  filtersSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}
export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filtersSelected,
  handleFilterChange,
  onClearCompleted
}: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending tasks
      </span>
      <Filters
        filtersSelected={filtersSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
