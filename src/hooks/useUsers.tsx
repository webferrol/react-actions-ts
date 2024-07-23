import { useEffect, useState, useTransition } from 'react'
import { getUsers } from '../helpers/getUsers'
import { User } from '../types'

export function useUsers () {
  const [isPending, startTransition] = useTransition()
  const [users, setUsers] = useState<User[]|undefined>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    startTransition(() => {
      getUsers()
        .then(allUsers => setUsers(allUsers))
        .catch(err => setError(err.message))
    })
  }, [])

  return {
    error,
    isPending,
    users
  }
}
