import { useRef, useActionState } from 'react'

interface Props {
    onUserAdd: (value: string) => void
}

function UserForm ({ onUserAdd } : Props) {
  const handleUserAdd = async (_previousState: unknown, formData: FormData) => {
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

  const [, submitAction] = useActionState(handleUserAdd)
  const userInput = useRef<HTMLInputElement>(null)

  return (
      <form action={submitAction}>
        <label htmlFor="user">
          User
        </label>
        <input ref={userInput} type="text" id="user" name="user" />
        <button>Añadir Usuario</button>
      </form>

  )
}

export default UserForm
