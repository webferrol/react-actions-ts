import { User } from '../types'

function ShowUsers ({ users }: { users: User[]}) {
  return (
      <ul>
        {
          users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))
        }
      </ul>
  )
}

export default ShowUsers
