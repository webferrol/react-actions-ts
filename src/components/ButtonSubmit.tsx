import { useFormStatus } from 'react-dom'

function ButtonSubmit () {
  const { pending, data, method, action } = useFormStatus()
  console.log(method, action)
  return (
        <>
        <button disabled={pending}>Añadir Usuario</button>
        {pending && `Añadiendo ${data.get('user')}`}
        </>
  )
}

export default ButtonSubmit
