import { useFormStatus } from 'react-dom'

function ButtonSubmit () {
  const { pending, data, method, action } = useFormStatus()
  console.log(method, action, data?.get('user'))
  return (
        <button disabled={pending} aria-busy={pending}>
          { pending ? 'Añadiendo' : 'Añadir' }
        </button>
  )
}

export default ButtonSubmit
