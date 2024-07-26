import { USERS_URL } from '../constants'
import { User } from '../types'

export const getUser = async (id: string|number):Promise<User|undefined> => {
  const response = await fetch(`${USERS_URL}${id}`)
  if (!response.ok) throw new Error(`Error: ${response.statusText} (${response.status})`)
  const data = await response.json()
  return data
}
