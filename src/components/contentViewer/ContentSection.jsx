export function ContentSection ({ children, section }) {
  return (
    <div id={section} className='content-section'>
      {children}
    </div>
  )
}
