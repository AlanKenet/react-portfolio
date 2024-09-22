import { SocialMediaBar } from '@home/components/SocialMediaBar'

import '@home/styles/Home.css'

export function Home () {
  return (
    <section className='home-section content'>
      <header className='home-header'>
        <div className='home-title-wrapper'>
          <h1 className='home-title'>
            Alan Kenet<span className='text-light'>.</span>
          </h1>
          <h2 className='home-subtitle'>
            Front End Dev
          </h2>
        </div>
        <p className='home-description'>
          I develop web solutions focused on <span className='text-neutro text-w800'>design</span> and <span className='text-neutro text-w800'>user experience</span>. I use technologies like <span className='text-neutro text-w800 text-italic'>React</span> to deliver <span className='text-neutro text-w800'>interactive</span> and <span className='text-neutro text-w800'>intuitive</span> interfaces.
          {/* Desarrollo soluciones web enfocadas en el <span class='text-shadow text-w600'>diseño</span> y la <span class='text-shadow text-w600'>experiencia del usuario</span>. Utilizo tecnologías como <span class='text-shadow text-w600'>React</span> para ofrecer interfaces <span class='text-shadow text-w600'>interactivas</span> e <span class='text-shadow text-w600'>intuitivas</span>. */}
        </p>
      </header>
      <footer className='home-footer'>
        <button className='home-button'>Let's Talk</button>
        <SocialMediaBar />
      </footer>
    </section>
  )
}
