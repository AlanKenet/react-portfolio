import { FACTS } from '@/constants/aboutMe'

import { AboutCard } from '@about/components/AboutCard'

import '@about/styles/About.css'

export function About () {
  return (
    <section className='about-section content'>
      <header className='about-header'>
        <h1 className='about-title'>
          Soy <span className='text-shadow alankenet'>Alan Kenet</span><span className='text-light dot'>.</span>
        </h1>
      </header>
      <div className='about-description'>
        {
          FACTS.map(({ tier, content }, index) => (
            <AboutCard key={index} tier={tier}>{content}</AboutCard>
          ))
        }
      </div>
    </section>
  )
}
