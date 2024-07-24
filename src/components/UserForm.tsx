import { FormEvent, useRef } from 'react'

interface Props {
    onUserAdd: (value: string) => void
}

function UserForm ({ onUserAdd } : Props) {
  const userInput = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const userValue = formData.get('user')

    if (typeof userValue === 'string') {
      if (userValue.trim().length) {
        onUserAdd(userValue)
        if (userInput.current) {
          userInput.current.value = ''
        }
      }
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">
          User
        </label>
        <input ref={userInput} type="text" id="user" name="user" />
        <button>Añadir Usuario</button>
      </form>

  )
}

export default UserForm
