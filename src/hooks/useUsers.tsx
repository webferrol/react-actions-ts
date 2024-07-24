import { useEffect, useState, useTransition } from 'react'
import { getUsers } from '../helpers/getUsers'
import { User } from '../types'

export function useUsers () {
  const [isPending, startTransition] = useTransition()
  const [users, setUsers] = useState<User[]|undefined>()
  const [error, setError] = useState<string>()

  const push = (value: string) => {
    if (!users?.length) return
    setUsers([...users, { id: window.crypto.randomUUID(), name: value }])
  }

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
    push,
    users
  }
}
