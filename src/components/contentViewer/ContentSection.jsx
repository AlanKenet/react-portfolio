export function ContentSection ({ children, classes }) {
  return (
    <section className={`content-section ${classes}`}>
      {children}
    </section>
  )
}
