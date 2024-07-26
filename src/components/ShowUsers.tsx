import UserItem from './UserItem'
import { User } from '../types'

function ShowUsers ({ users }: { users: User[]}) {
  return (
      <ul>
        {
          users.map(({ id, name } : User) => (
            <li key={id}>
              <UserItem userName={name} id={id} />
            </li>
          ))
        }
      </ul>
  )
}

export default ShowUsers
