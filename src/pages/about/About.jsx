import './About.css'

export function About () {
  return (
    <>
      <header className='about-header'>
        <h1 className='page-title'>About me</h1>
      </header>
      <main className='about-main'>
        <p className='about-description'>
          <span className='my-name text-highlight'>
            Soy <span className='alankenet'>Alan Kenet</span><span className='text-base text-w700'>.</span>
          </span><br /><br /><br />

          <span className='main-description'>
            Desarrollador <span className='text-highlight text-w700'>Front End</span>, ingeniero mecatronico y apasionado por la tecnologia.
          </span><br /><br /><br />

          Desarrollo <span className='text-highlight text-w700'>soluciones web</span> con un fuerte enfoque en la <span className='text-highlight text-w700'>experiencia del usuario</span>, disfruto de los retos y de solucionar problemas. Creo en la <span className='text-highlight text-w700'>innovacion</span> y mejora continua como camino a la excelencia, por lo que me gusta mantenerme en constante formacion y experimentar con diferentes tecnologias.<br /><br />

          <span className='text-highlight text-w500'>
            Experto en tomar cafe, acariaciar gatos y coleccionar atardeceres.
          </span>
        </p>
      </main>
    </>
  )
}
