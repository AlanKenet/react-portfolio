import '@contact/styles/Contact.css'
import { ContactForm } from './components/ContactForm'

export function Contact () {
  return (
    <>
      <header className='contact-header'>
        <h1 className='page-title'>Contact Me</h1>
      </header>
      <main>
        <ContactForm />
      </main>
    </>
  )
}
