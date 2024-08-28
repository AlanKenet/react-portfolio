import { useState, useEffect } from 'react'

import './Contact.css'

export function Contact () {
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

  useEffect(() => console.log(values), [values])

  return (
    <>
      <header className='contact-header'>
        <h1 className='page-title'>Contact Me</h1>
      </header>
      <main>
        <form action='submit' name='contact'>
          <div>
            <label htmlFor='name'>Your Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Your E-mail:</label>
            <input
              type='email'
              name='email'
              id='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='message'>Your Message:</label>
            <input 
              type='text' 
              name='message' 
              id='message'
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <button type='button'>Submit</button>
        </form>
      </main>
    </>
  )
}
