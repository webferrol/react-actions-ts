import { useRef, useActionState } from 'react'

interface Props {
    onUserAdd: (value: string) => void
}

const asyncFunction = async (value: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(value)
    }, 3000)
  })
}

function UserForm ({ onUserAdd } : Props) {
  const handleUserAdd = async (_previousState: unknown, formData: FormData) => {
    const userValue = await asyncFunction(formData.get('user') as string)
    if (typeof userValue === 'string') {
      if (userValue.trim().length) {
        onUserAdd(userValue)
        if (userInput.current) {
          userInput.current.value = ''
        }
      }
    }
  }

  const [, submitAction, isPending] = useActionState(handleUserAdd)
  const userInput = useRef<HTMLInputElement>(null)

  return (
      <form action={submitAction}>
        <label htmlFor="user">
          User
        </label>
        <input ref={userInput} type="text" id="user" name="user" />
        <button disabled={isPending}>Añadir Usuario</button>
      </form>

  )
}

export default UserForm
