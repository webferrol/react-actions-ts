import MetaData from './components/MetaData'
import ShowUsers from './components/ShowUsers'
import UserForm from './components/UserForm'
import { useUsers } from './hooks/useUsers'

function App () {
  const { error, isPending, push, users } = useUsers()

  const handleUserAdd = (value: string) => {
    push(value)
  }

  return (
    <>
      <MetaData />
      <UserForm onUserAdd={handleUserAdd} />
      {isPending && 'Cargando'}
      {error}
      {users && <ShowUsers users={users} />}
    </>
  )
}

export default App
