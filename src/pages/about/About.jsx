import { BentoBox } from '@/components/bentoBox/BentoBox'
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
      <BentoBox className='about-bento-box' component={AboutCard} content={FACTS} />
    </section>
  )
}
