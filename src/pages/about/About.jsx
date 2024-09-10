import './About.css'

export function About () {
  return (
    <section className='about-section content'>
      <header className='about-header'>
        <h1 className='my-name text-highlight'>
          Soy <span className='alankenet'>Alan Kenet</span><span className='text-base text-w700'>.</span>
        </h1>
        <h2 className='main-description'>
          Desarrollador <span className='text-highlight text-w700'>Front End</span>, ingeniero mecatronico y apasionado por la tecnologia.
        </h2>
      </header>
      <p className='about-description'>
        Desarrollo <span className='text-highlight text-w700'>soluciones web</span> con un fuerte enfoque en la <span className='text-highlight text-w700'>experiencia del usuario</span>, disfruto de los retos y de solucionar problemas. Creo en la <span className='text-highlight text-w700'>innovacion</span> y mejora continua como camino a la excelencia, por lo que me gusta mantenerme en constante formacion y experimentar con diferentes tecnologias.
      </p>
      <p>
        <span className='text-highlight text-w500'>
          Experto en tomar cafe, acariaciar gatos y coleccionar atardeceres.
        </span>
      </p>
    </section>
  )
}
