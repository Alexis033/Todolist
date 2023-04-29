import { CreateTodo } from './CreateTodo'
import typescript_logo from '../../public/Typescript_logo.svg'
import { type TodoTitle } from '../types'
interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }: Props) => {
  return (
    <header className="header">
      <h1>
        Todo{' '}
        <img
          style={{ width: '60px' }}
          src={typescript_logo}
          alt="Typescript logo"
        />
      </h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  )
}
