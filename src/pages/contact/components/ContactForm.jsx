import { useState } from 'react'

export function ContactForm () {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value
    }

    setValues(newValues)
  }

  return (
    <form action='submit' name='contact'>
      <fieldset>
        <label htmlFor='name'>Your Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={values.name}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor='email'>Your E-mail:</label>
        <input
          type='email'
          name='email'
          id='email'
          value={values.email}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor='message'>Your Message:</label>
        <textarea
          name='message'
          id='message'
          value={values.message}
          onChange={handleChange}

        />
      </fieldset>
      <button type='button'>Submit</button>
    </form>
  )
}
