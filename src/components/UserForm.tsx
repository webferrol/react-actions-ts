import { useRef, useActionState } from 'react'
import ButtonSubmit from './ButtonSubmit'
import { asyncUserValueMock } from '../helpers/async-user-value-mock'

interface PropsUserForm {
  onUserAdd: (value: string) => void
}

function UserForm ({ onUserAdd }: PropsUserForm) {
  const userInput = useRef<HTMLInputElement>(null)

  const userAdd = async (_previousState: unknown, formData: FormData) => {
    const userValue = formData.get('user')
    const isUser = typeof userValue === 'string' && userValue.trim().length
    if (!isUser) return
    const userData = await asyncUserValueMock(userValue)
    onUserAdd(userData)
    if (userInput.current) {
      userInput.current.value = ''
    }
    return 'Usuario añadido'
  }

  // const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);
  const [stateValue, formActionNewUser] = useActionState(userAdd)

  return (
    <form action={formActionNewUser}>
      <label htmlFor="user">
        User {stateValue}
      </label>
      <input ref={userInput} type="text" id="user" name="user" />
      <ButtonSubmit />
    </form>
  )
}

export default UserForm
