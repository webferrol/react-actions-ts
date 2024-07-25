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
    <main>
      <MetaData />
      <h1>Usuarios</h1>
      <header>
        <h2>Alta de usuarios</h2>
        <UserForm onUserAdd={handleUserAdd} />
      </header>
      {isPending && 'Cargando'}
      {error}
      {users && <ShowUsers users={users} />}
    </main>
  )
}

export default App
