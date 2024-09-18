import { SocialMediaBar } from '@home/components/SocialMediaBar'

import '@home/styles/Home.css'

export function Home () {
  return (
    <section className='home-section content'>
      <header className='home-header'>
        <div className='home-title-wrapper'>
          <h1 className='home-title'>
            <span className='text-black'>Alan Kenet</span>
            <span className='text-neutro'>.</span>
          </h1>
          <h2 className='home-subtitle'>
            <span>Front End Dev</span>
          </h2>
        </div>
        <p className='home-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione natus perspiciatis exercitationem magnam aliquam quo numquam fugiat sint inventore, quos dolorum tempora animi eaque velit saepe ut, sapiente iste eum.
        </p>
      </header>
      <footer className='home-footer'>
        <button className='home-button'>Contact me</button>
        <SocialMediaBar />
      </footer>
    </section>
  )
}
