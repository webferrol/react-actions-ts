import { USERS_URL } from '../constants'
import { User } from '../types'

export const getUsers = async ():Promise<User[]|undefined> => {
  const response = await fetch(USERS_URL)
  if (!response.ok) throw new Error(`Error: ${response.statusText} (${response.status})`)
  const data = await response.json()
  return data
}
