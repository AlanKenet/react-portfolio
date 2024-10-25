import '@contact/styles/Contact.css'
import { ContactForm } from './components/ContactForm'

export function Contact () {
  return (
    <section className='contact-section content'>
      <header className='contact-header'>
        <h1 className='page-title'>Contact Me</h1>
      </header>
      <div>
        <ContactForm />
        <section>
          Aqui va la descripcion y despedida
        </section>
      </div>
    </section>
  )
}
