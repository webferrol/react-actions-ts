import { FormEvent } from 'react'
import ShowUsers from './components/ShowUsers'
import { useUsers } from './hooks/useUsers'

function App () {
  const { error, isPending, users } = useUsers()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <title>Nuevos hooks: Actions</title>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">
          User
        </label>
        <input type="text" id="user" name="user" />
      </form>
      { isPending && 'Cargando'}
      {error}
      { users && <ShowUsers users={users}/>}
    </>
  )
}

export default App
