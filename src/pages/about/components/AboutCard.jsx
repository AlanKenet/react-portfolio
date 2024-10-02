import '@about/styles/AboutCard.css'

export function AboutCard ({ children }) {
  return (
    <article className='about-card'>
      <h1>
        {children}
      </h1>
    </article>
  )
}
