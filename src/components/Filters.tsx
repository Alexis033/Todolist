import { FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface Props {
  filtersSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}
export const Filters: React.FC<Props> = ({
  filtersSelected,
  onFilterChange
}: Props) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = filtersSelected === key
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
