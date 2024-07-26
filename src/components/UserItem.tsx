import { useState, useTransition } from 'react'
import { getUser } from '../helpers/getUser'
import { User } from '../types'

interface Props {
  userName: string
  id: string | number
}

function UserItem ({ userName, id }: Props) {
  const [isPending, startTransition] = useTransition()
  const [user, setUser] = useState<User>()
  const [error, setError] = useState('')
  const handleClick = () => {
    startTransition(() => {
      getUser(id)
        .then(setUser)
        .catch((err) => {
          const message = err instanceof Error ? err.message : 'Error desconocido'
          setError(message)
        })
    })
  }
  return (
    <article
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
      aria-busy={isPending}>
      {
        user
          ? (<><header>{userName}</header>{user?.website}</>)
          : (<><header>{userName}</header>{error}</>)
      }
    </article>
  )
}

export default UserItem
